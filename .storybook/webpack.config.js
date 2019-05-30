const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules = config.module.rules.filter(
    f => f.test.toString() !== '/\\.css$/'
  );

  config.module.rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]_[hash:base64:5]',
        },
      },
      'postcss-loader',
    ], 
  });

  return config;
};
