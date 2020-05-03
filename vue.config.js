/* eslint-disable */
const path = require('path');

module.exports = {
  devServer: {
    overlay: false,
  },

  configureWebpack: (config) => {
    config.resolveLoader = {
      modules: ['node_modules', path.resolve(__dirname, 'src/loaders')],
    };
  },

  chainWebpack: (config) => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-post-loader')
      .loader('markdown-post-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .end();
  },
};