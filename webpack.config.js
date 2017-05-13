const path    = require('path')
const webpack = require('webpack')

const BUILD_DIR = path.resolve(__dirname, 'app/compiled')
const APP_DIR   = path.resolve(__dirname, 'app/client')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  watch: true
};
