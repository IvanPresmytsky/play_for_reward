const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const project = require('../config/project.config');
const webpackConfig = require('../config/webpack.config');

const app = express();

const compiler = webpack(webpackConfig);
const { __DEV__, __PROD__ } = project.globals;

if (__DEV__) {
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: webpackConfig.filename,
    publicPath: webpackConfig.publicPath,
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  }));

  app.use(webpackHotMiddleware(compiler));

  app.use(express.static(project.paths.public()));

  app.use('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');

    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
}

if (__PROD__) {
  app.use(express.static(project.paths.dist()));
  
  app.get("*", (req, res) => {
    res.sendFile(project.paths.dist('index.html'));
  });
} 

const server = app.listen(project.server_port, () => {
  const { port } = server.address().port;
  const host = server.address().address;
  console.log('app listening at http://%s:%s', host, port);
});
