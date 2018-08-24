const path = require('path')
const {resolve} = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['babel-polyfill','./app/index.js'],
  output: {
    path: path.join(__dirname, 'target', 'classes', 'META_INF', 'resources', 'webjars', 'client'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, './app'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}