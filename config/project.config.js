const ip = require('ip');
const path = require('path');

const config = {
  env: process.env.NODE_ENV || 'development',

  // project server configuration
  server_host: ip.address(),
  server_port: process.env.PORT || 8080,

  path_base: path.resolve(__dirname, '..'),
  dir_client: 'src',
  dir_dist: 'dist',
  dir_public: 'public',

  // project devtool configuration
  compiler_devtool: 'source-map',
};

config.globals = {
  'process.env': {
    NODE_ENV: JSON.stringify(config.env),
  },
  NODE_ENV: config.env,
  __DEV__: config.env === 'development',
  __PROD__: config.env === 'production',
  __TEST__: config.env === 'test',
};

/* eslint prefer-rest-params:0 */
// project config utilities
// utility for project paths resolving
function base() {
  const args = [config.path_base].concat([].slice.call(arguments));
  return path.resolve(...args);
}

config.paths = {
  base,
  client : base.bind(null, config.dir_client),
  public : base.bind(null, config.dir_public),
  dist   : base.bind(null, config.dir_dist),
};

module.exports = config;
