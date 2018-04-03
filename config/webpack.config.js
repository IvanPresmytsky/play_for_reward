const merge = require('webpack-merge');
const project = require('./project.config');
const baseConfig = require('./webpack.base.config');
const devConfig = require('./webpack.dev.config');
const prodConfig = require('./webpack.prod.config');

const { __DEV__, __PROD__ } = project.globals;

function createConfig() {
  if (__DEV__) return merge(baseConfig, devConfig);
  if (__PROD__) return merge(baseConfig, prodConfig);
  return merge(baseConfig, devConfig);
}

module.exports = createConfig();
