const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const project = require('./project.config');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: project.paths.client('index.html'),
  filename: 'index.html',
  inject: 'body',
});

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
});

const baseWebpackConfig = {
  output: {
    path: project.paths.dist(),
    publicPath: '/',
    filename:'[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }, {
        test: /\.json$/,
        use: {
          loader: 'json-loader',
        },
      }, {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      project.paths.base('node_modules'),
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    MiniCssExtractPluginConfig
  ]
};

module.exports = baseWebpackConfig;