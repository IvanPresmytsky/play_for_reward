const webpack = require('webpack');
const project = require('./project.config');

const APP_ENTRY = project.paths.client('root.js');

const prodWebpackConfig = {
  devtool: false,
  entry: [APP_ENTRY],
  mode: 'production',
  plugins: [
    new webpack.IgnorePlugin(/redux-logger/),
  ],
};

module.exports = prodWebpackConfig;
