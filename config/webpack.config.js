const merge = require('webpack-merge');
const analyzeConfig = require('./webpack.analyze.config');
const baseConfig = require('./webpack.base.config');
const devConfig = require('./webpack.dev.config');
const prodConfig = require('./webpack.prod.config');
const project = require('./project.config');

const { __ANALYZE__, __DEV__, __PROD__ } = project.globals;

function createConfig() {
  if (__DEV__) return merge(baseConfig, devConfig);
  if (__PROD__) return merge(baseConfig, prodConfig);
  if (__ANALYZE__) return merge(baseConfig, prodConfig, analyzeConfig);
  return merge(baseConfig, devConfig);
}

module.exports = createConfig();
