const project = require('./project.config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const analyzeConfig = {
  plugins: [
    new BundleAnalyzerPlugin(project.bundle_analyzer_options),
  ],
};

module.exports = analyzeConfig;
