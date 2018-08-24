const packageJSON = require('./package.json')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './app/index.js',
  output: {
    paths: path.join(__dirname, 'target', 'classes', 'META_INF', 'resources', 'webjars', 'packageJSON.name'),
    filename: 'bundle.js'
  }
}