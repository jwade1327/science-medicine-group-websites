// const icleCfg = require('./wp-icle');
const subscribe = require('./subscribe');
const privacyPolicy = require('./privacy-policy');

const clinicalNews = [
  { href: '/clinical-news/ct', label: 'CT' },
  { href: '/clinical-news/digital-x-ray', label: 'Digital X-Ray' },
  { href: '/clinical-news/interventional', label: 'Interventional' },
  { href: '/clinical-news/molecular-imaging', label: 'Molecular Imaging' },
  { href: '/clinical-news/mri', label: 'MRI' },
  { href: '/clinical-news/radiation-oncology-therapy', label: 'Radiation Oncology/Therapy' },
  { href: '/clinical-news/ultrasound', label: 'Ultrasound' },
  { href: '/clinical-news/womens-imaging', label: 'Womens Imaging' },
];
const imagingInformatics = [
  { href: '/imaging-informatics/advanced-visualization', label: 'Advanced Visualization' },
  { href: '/imaging-informatics/enterprise-imaging', label: 'Enterprise Imaging' },
  { href: '/imaging-informatics/artifical-intelligence', label: 'Artifical Intelligence' },
  { href: '/imaging-informatics/cybersecurity', label: 'Cybersecurity' },
];
const industryNews = [
  { href: '/industry-news/installations', label: 'Installations' },
  { href: '/industry-news/product-news', label: 'Product News' },
  { href: '/industry-news/regulatory', label: 'Regulatory' },
  { href: '/industry-news/ma', label: 'M&A' },
  { href: '/industry-news/market-analysis', label: 'Market Analysis' },
];
const practiceManagement = [
  { href: '/practice-management/administration', label: 'Administration' },
  { href: '/practice-management/associations', label: 'Associations' },
  { href: '/practice-management/careers', label: 'Careers' },
  { href: '/practice-management/equity-inclusion', label: 'Equity & Inclusion' },
  { href: '/practice-management/medicolegal', label: 'Medicolegal' },
  { href: '/practice-management/patient-safety', label: 'Patient Safety' },
  { href: '/practice-management/radiologic-technologist', label: 'Radiologic Technologist' },
  { href: '/practice-management/service', label: 'Service' },
];
const radiologyEducation = [
  { href: '/radiology-education/medical-students', label: 'Medical Students' },
  { href: '/radiology-education/residents-fellows', label: 'Residents/Fellows' },
];
const subspecialties = [
  { href: '/subspecialties/breast-imaging', label: 'Breast Imagaing' },
  { href: '/subspecialties/cardiovascular-radiology', label: 'Cardiovascular Radiology' },
  { href: '/subspecialties/chest-radiology', label: 'Chest Radiology' },
  { href: '/subspecialties/emergency-radiology', label: 'Emergency Radiology' },
  { href: '/subspecialties/gastrointestinal-radiology', label: 'Gastrointestinal Radiology' },
  { href: '/subspecialties/genitourinary-radiology', label: 'Genitourinary Radiology' },
  { href: '/subspecialties/head-and-neck-radiology', label: 'Head and Neck Radiology' },
  { href: '/subspecialties/interventional-radiology', label: 'Interventional Radiology' },
  { href: '/subspecialties/medical-physics', label: 'Medical Physics' },
  { href: '/subspecialties/musculoskeletal-radiology', label: 'Musculoskeletal Radiology' },
  { href: '/subspecialties/neuroradiology', label: 'Neuroradiology' },
  { href: '/subspecialties/nuclear-radiology', label: 'Nuclear Radiology' },
  { href: '/subspecialties/pediatric-radiology', label: 'Pediatric Radiology' },
  { href: '/subspecialties/radiation-oncology', label: 'Radiation Oncology' },
];

const topics = [
  { href: '/clinical-news', label: 'Clinical News', children: clinicalNews },
  { href: '/imaging-informatics', label: 'Imaging Informatics', children: imagingInformatics },
  { href: '/industry-news', label: 'Industry News', children: industryNews },
  { href: '/practice-management', label: 'Practice Management', children: practiceManagement },
  { href: '/radiology-education', label: 'Radiology Education', children: radiologyEducation },
  { href: '/subspecialties', label: 'Subspecialties', children: subspecialties },
  // ...(icleCfg.enabled ? [
  //   { href: `https://${icleCfg.hostname}/cases?VerifyLogin=1`, label: 'Cases', when: 'logged-in' },
  //   { href: `https://${icleCfg.hostname}/jobs?VerifyLogin=1`, label: 'Jobs', when: 'logged-in' },
  //   { href: `https://${icleCfg.hostname}/cases?VerifyLogin=0`, label: 'Cases', when: 'logged-out' },
  //   { href: `https://${icleCfg.hostname}/jobs?VerifyLogin=0`, label: 'Jobs', when: 'logged-out' },
  //   { href: `https://${icleCfg.hostname}/forums?VerifyLogin=1`, label: 'Forums', when: 'logged-in' },
  //   { href: `https://${icleCfg.hostname}/cme?VerifyLogin=1`, label: 'CME', when: 'logged-in' },
  //   { href: `https://${icleCfg.hostname}/forums?VerifyLogin=0`, label: 'Forums', when: 'logged-out' },
  //   { href: `https://${icleCfg.hostname}/cme?VerifyLogin=0`, label: 'CME', when: 'logged-out' },
  // ] : []),
];

const resources = [
  { href: '/about-us', label: 'About Us' },
  { href: 'dev.my.auntminnie.com', label: 'Cases' },
  { href: 'dev.my.auntminnie.com', label: 'Jobs' },
  { href: 'dev.my.auntminnie.com', label: 'Forums' },
  { href: 'dev.my.auntminnie.com', label: 'CME' },
  // ...(icleCfg.enabled ? [
  //   { href: `https://${icleCfg.hostname}/forums?VerifyLogin=1`, label: 'Forums', when: 'logged-in' },
  //   { href: `https://${icleCfg.hostname}/cme?VerifyLogin=1`, label: 'CME', when: 'logged-in' },
  //   { href: `https://${icleCfg.hostname}/forums?VerifyLogin=0`, label: 'Forums', when: 'logged-out' },
  //   { href: `https://${icleCfg.hostname}/cme?VerifyLogin=0`, label: 'CME', when: 'logged-out' },
  // ] : []),
  { href: '/advertising', label: 'Advertising' },
  { href: '/help', label: 'Help' },
  { href: '/resources/conference', label: 'Conferences' },
  { href: '/resources/media-press', label: 'Media & Press' },
  { href: '/resources/videos', label: 'Videos' },
  { href: '/resources/webinars', label: 'Webinars' },
];

const mobileMenu = {
  primary: topics,
  secondary: resources,
};

module.exports = {
  type: 'navbar-c',
  promos: [
    {
      title: subscribe.label,
      callToAction: subscribe.label,
      link: subscribe.href,
    },
  ],
  user: {
    items: [
      {
        href: '/login',
        label: 'Sign In',
        when: 'logged-out',
        modifiers: ['user'],
      },
      {
        href: '/logout',
        label: 'Sign Out',
        when: 'logged-in',
        modifiers: ['user'],
      },
    ],
    tools: [
      {
        href: '/login',
        label: 'Sign In',
        when: 'logged-out',
        modifiers: ['user'],
      },
      {
        href: '/user/profile',
        label: 'Modify profile',
        when: 'logged-in',
        modifiers: ['user'],
      },
      {
        href: '/logout',
        label: 'Sign Out',
        when: 'logged-in',
        modifiers: ['user'],
      },
    ],
  },
  mobileMenu,
  topics,
  primary: {
    items: resources,
  },
  secondary: {
    items: topics,
  },
  tertiary: {
    items: [],
  },
  contexts: [
    {
      when: ['/clinical-news'],
      secondary: { items: topics },
      tertiary: { items: [] },
      primary: { items: clinicalNews },
    },
    {
      when: ['/imaging-informatics'],
      secondary: { items: topics },
      tertiary: { items: [] },
      primary: { items: imagingInformatics },
    },
    {
      when: ['/industry-news'],
      secondary: { items: topics },
      tertiary: { items: [] },
      primary: { items: industryNews },
    },
    {
      when: ['/practice-management'],
      secondary: { items: topics },
      tertiary: { items: [] },
      primary: { items: practiceManagement },
    },
    {
      when: ['/radiology-education'],
      secondary: { items: topics },
      tertiary: { items: [] },
      primary: { items: radiologyEducation },
    },
    {
      when: ['/subspecialties'],
      secondary: { items: topics },
      tertiary: { items: [] },
      primary: { items: subspecialties },
    },
  ],
  toggleMenu: {
    col1: {
      label: 'Clinical News',
      items: clinicalNews,
    },
    col2: {
      label: 'Imaging Informatics',
      items: imagingInformatics,
    },
    col3: {
      label: 'Industry News',
      items: industryNews,
    },
    col4: {
      label: 'Practice Management',
      items: practiceManagement,
    },
    col5: {
      label: 'Resources',
      items: resources,
    },
  },
  footer: {
    col1: {
      label: 'Topics',
      colspan: 5,
      items: [
        { href: '/clinical-news', label: 'Clinical News' },
        { href: '/imaging-informatics', label: 'Imaging Informatics' },
        { href: '/industry-news', label: 'Industry News' },
        { href: '/practice-management', label: 'Practice Management' },
        { href: '/radiology-education', label: 'Radiology Education' },
        { href: '/subspecialties', label: 'Subspecialties' },
      ],
    },
    col2: {
      label: 'Resources',
      items: resources,
    },
    items: [
      privacyPolicy,
      { href: '/page/terms-conditions', label: 'Terms & Conditions' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
      { href: '/', label: 'Home' },
    ],
  },
};
