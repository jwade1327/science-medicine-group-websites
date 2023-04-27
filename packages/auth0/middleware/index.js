const debug = require('debug')('auth0');
const { json } = require('express');
const { auth, attemptSilentLogin } = require('express-openid-connect');
const Joi = require('@parameter1/joi');
const { validate } = require('@parameter1/joi/utils');
const { asyncRoute } = require('@parameter1/base-cms-utils');
const identityX = require('./identity-x');

const returnToCookieName = '__idxReturnTo';

/**
 *
 */
module.exports = (app, params = {}) => {
  const {
    afterCallback,
    auth0Logout,
    authRequired,
    baseURL,
    clientID,
    issuerBaseURL,
    routes,
    secret,
  } = validate(Joi.object({
    afterCallback: Joi.function(),
    auth0Logout: Joi.boolean().default(true),
    authRequired: Joi.boolean().default(false),
    baseURL: Joi.string().required(),
    clientID: Joi.string().required().description('The Auth0 client id'),
    issuerBaseURL: Joi.string().required().uri().description('The (potentially customized) Auth0 tenant URL'),
    routes: Joi.object().default({ login: false, logout: false }),
    secret: Joi.string().required().description('The Auth0 client secret'),
  }), params);

  // Install Auth0 (Express OIDC connect)
  app.use(auth({
    afterCallback,
    auth0Logout,
    authRequired,
    baseURL,
    clientID,
    issuerBaseURL,
    routes,
    secret,
  }));

  // Attempt silent login when query parameter is present
  app.use((req, res, next) => {
    if (!req.query.VerifyLogin) return next();
    // If the SSO cookie was detected, force it to expire in 1 minute
    if (req.cookies.skipSilentLogin) {
      res.cookie('skipSilentLogin', true, { httpOnly: true, maxAge: 60000 });
    }
    return attemptSilentLogin()(req, res, next);
  });

  // Enforce user logout/notice when email is unconfirmed.
  app.use(asyncRoute(async (req, res, next) => {
    const { user } = req.oidc;
    const isAuthenticated = req.oidc.isAuthenticated();
    const isIdentified = Boolean(req.identityX.token);
    const canRedirect = !/^\/user\/auth0-db-email-verification/.test(req.url);
    if (isAuthenticated && isIdentified && canRedirect) {
      if (user && user.requireVerification) {
        // Log out of IdX
        await req.identityX.logoutAppUser(); // @todo fix upstream error when no token present
        // Redirect to verification notice
        const usp = new URLSearchParams({ userId: user.sub });
        debug('log out/redirect!', usp);
        res.redirect(302, `/user/auth0-db-email-verification?${usp}`);
      } else if (user && user.returnTo) {
        debug(`Redirecting to ${user.returnTo}!`);
        // We only want to do this once.
        if (!req.cookies[returnToCookieName]) {
          res.cookie(returnToCookieName, '1', { maxAge: 900000 });
          res.redirect(302, user.returnTo);
        }
      }
    }
    next();
  }));

  app.get('/user/verify-email', (req, res) => {
    res.oidc.login({
      authorizationParams: {
        // Auth0 defaults
        response_type: 'id_token',
        response_mode: 'form_post',
        scope: 'openid profile email',
        // Custom kv data
        verifyEmail: true,
      },
      returnTo: '/',
    });
  });

  // Redirect after login if `returnTo` URL parameter is present.
  if (routes.login === false) {
    app.get('/login', (req, res) => {
      const { source, additionalEventData } = req.query;
      const referrer = req.query.returnTo || req.get('referrer') || baseURL;
      let returnTo;
      try {
        returnTo = new URL(referrer);
      } catch (e) {
        returnTo = new URL(referrer, `${req.protocol}://${req.get('host')}`);
      }
      returnTo.searchParams.append('isAuth0Login', true);
      res.oidc.login({
        authorizationParams: {
          // Auth0 defaults
          response_type: 'id_token',
          response_mode: 'form_post',
          scope: 'openid profile email',
          // Custom kv data
          source,
          additionalEventData,
          returnTo: `${returnTo}`,
        },
        returnTo: `${returnTo}`,
      });
    });
  }

  // the Auth0 user has been logged out, log out the IdentityX user.
  if (routes.logout === false) {
    app.get('/logout', asyncRoute(async (req, res) => {
      await req.identityX.logoutAppUser();
      res.oidc.logout();
    }));
  }

  // Handle resend email request
  app.post('/__auth0/resend-email', json(), asyncRoute(async (req, res) => {
    const { auth0, body } = req;
    const { userId } = body;
    try {
      const r = await auth0.sendVerificationEmail(userId); // @todo retrieve user id
      res.json(r);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }));

  // Load the IdentityX integration
  app.use(identityX);
};
