const webpack = require('webpack');
const project = require('./project.config.js');

const APP_ENTRY = project.paths.client('app.js');

const devWebpackConfig = {
  devtool: project.compiler_devtool,
  entry: ['webpack/hot/dev-server', 'webpack-hot-middleware/client', APP_ENTRY],
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = devWebpackConfig;
