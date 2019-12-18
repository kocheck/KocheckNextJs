module.exports = {
  // webpack: config => {
  //   // Fixes npm packages that depend on `fs` module
  //   config.node = {
  //     fs: 'empty',
  //   };

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
};
