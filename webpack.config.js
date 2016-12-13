const path = require('path');
const webpack = require('webpack');

const PATHS = {
  html: path.join(__dirname, 'client/index.html'),
  src: path.join(__dirname, 'client/src'),
  dist: path.join(__dirname, '/dist')
}

module.exports = {
  entry: {
    javascript: PATHS.src,
    html: PATHS.html
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3333,
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader : 'style!css!less'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: [ 'babel-loader' ],
        query: {
          presets: [ 'react', 'es2015', 'stage-1', 'stage-2' ]
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}
