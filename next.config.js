const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');

module.exports = withPlugins([
  [
    withCss,
    {
      webpack(config) {
        config.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader',
        });
        config.node = {
          fs: 'empty',
        };
        return config;
      },
    },
  ],
  [
    withSass,
    {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
      },
    },
  ],
]);
