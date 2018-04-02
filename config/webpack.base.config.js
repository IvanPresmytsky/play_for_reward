const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
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
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]_[hash:base64:5]',
            },
          },
          'postcss-loader'
        ]
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