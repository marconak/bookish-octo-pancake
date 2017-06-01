const path = require('path');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  source: path.join(__dirname, 'app'),
  output: path.join(__dirname, '../../../target/classes/static')
};

const config = {
  entry: [PATHS.source],
  output: {
    path: PATHS.output,
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [],
  devServer: {
    port: 9090,
    proxy: {
      '/': {
        target: 'http://localhost:8080',
        secure: false,
        prependPath: false
      }
    },
    publicPath: 'http://localhost:9090/',
    historyApiFallback: true
  },
  devtool: 'source-map'
};

if (TARGET === 'build') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      },
      sourceMap: true
    })
  );
}

module.exports = config;
