const classes = {
  h1: 'article__title',
  h2: 'article__subtitle',
  p: 'article__paragraph',
  ul: 'article__list',
  blockquote: 'article__quote',
  img: 'article__image',
};

module.exports = function markdownPostLoader(source) {
  let src = source;

  /* remove trash ids by markdown-loader */
  src = src.replace(/\sid="\D+"/g, '');

  /* add classes to elements */
  src = src.replace('<h1>', `<h1 class=${classes.h1}>`);
  src = src.replace(/<h2>/g, `<h2 class=${classes.h2}>`);
  src = src.replace(/<p>/g, `<p class=${classes.p}>`);
  src = src.replace(/<ul>/g, `<ul class=${classes.ul}>`);
  src = src.replace(/<blockquote>/g, `<blockquote class=${classes.blockquote}>`);
  src = src.replace(/<img/g, `<img class=${classes.img}`);

  return src;
};
