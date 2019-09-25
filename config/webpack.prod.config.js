const project = require('./project.config');

const APP_ENTRY = project.paths.client('root.js');

const prodWebpackConfig = {
  devtool: false,
  entry: [APP_ENTRY],
  mode: 'production',
};

module.exports = prodWebpackConfig;
