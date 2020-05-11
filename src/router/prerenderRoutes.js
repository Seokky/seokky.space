/* eslint-disable-next-line */
const slugs = require('../articles/slugs.json');

const routesToPrerender = [
  '/',
  '/blog',
];

Object.values(slugs).forEach((slug) => {
  routesToPrerender.push(`/blog/${slug}`);
});

module.exports = routesToPrerender;
