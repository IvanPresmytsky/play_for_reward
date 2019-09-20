const project = require('./project.config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const APP_ENTRY = project.paths.client('root.js');

const prodWebpackConfig = {
  devtool: false,
  entry: [APP_ENTRY],
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
};

module.exports = prodWebpackConfig;
