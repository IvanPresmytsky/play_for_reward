import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import project from '../config/project.config';
import webpackConfig from '../config/webpack.config';

const app = express();

const compiler = webpack(webpackConfig);

if (process.env.NODE_ENV === 'development') {
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

const server = app.listen(project.server_port, () => {
  const { port } = server.address().port;
  const host = server.address().address;
  console.log('app listening at http://%s:%s', host, port);
});
