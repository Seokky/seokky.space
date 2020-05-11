/* eslint-disable */
const path = require('path');
const ImageminPlugin = require('imagemin-webpack');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const routesToPrerender = require('./src/router/prerenderRoutes');

module.exports = {
  publicPath: '/',

  productionSourceMap: false,

  devServer: {
    overlay: false,
  },

  configureWebpack: (config) => {
    config.resolveLoader = {
      modules: ['node_modules', path.resolve(__dirname, 'src/loaders')],
    };

    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new ImageminPlugin({
          include: path.resolve(__dirname, 'src/assets/img'),
          imageminOptions: {
            plugins: [
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
            ],
          },
        }),

        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: routesToPrerender,
        }),
      )
    }
  },

  chainWebpack: (config) => {
    // config.plugins.delete('prefetch')
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
