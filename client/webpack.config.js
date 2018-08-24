const path = require('path')
const {resolve} = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['babel-polyfill','./app/index.js'],
  output: {
    path: path.join(__dirname, '..', 'server', 'src', 'main', 'resources', 'public'),
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