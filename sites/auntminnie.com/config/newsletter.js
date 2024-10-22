const defaults = {
  name: 'Stay in the Know',
  description: 'Delivered right to your inbox, Aunt Minnie\'s newsletters. Subscribe to get exclusive access!',
};

module.exports = {
  signupBanner: {
    ...defaults,
    imagePath: 'files/base/smg/all/image/static/am/newsletter-phone-full.png',
  },
  pushdown: {
    ...defaults,
    imagePath: 'files/base/smg/all/image/static/am/newsletter-phone-half.png',
  },
  modal: {
    enabled: process.env.SIGNUP_MODAL_ENABLED === 'true',
    ...defaults,
    name: 'Stay Informed.',
    description: 'Don\'t miss the latest medical imaging news and analysis',
    cookieValueToMatch: 2,
  },
  signupFooter: {
    ...defaults,
    name: 'Stay Connected',
    colspan: 3,
    enable: true,
  },
};
