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
    filename: 've-ui.js',
    library: "veui",
    libraryTarget: "umd"
  },
  plugins: [
    // extract css into its own file
    new ExtractTextPlugin({
      filename: 've-ui.css'
    }),
  ]
})

module.exports = webpackConfig
