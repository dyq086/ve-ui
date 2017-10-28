var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var commonWebpackConfig = require('./webpack.dist.common.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var webpackConfig = merge(commonWebpackConfig, {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'etc-ui.js',
    library: "etcui",
    libraryTarget: "umd"
  },
  plugins: [
    // extract css into its own file
    new ExtractTextPlugin({
      filename: 'etc-ui.css'
    }),
  ]
})

module.exports = webpackConfig
