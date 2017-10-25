var path = require("path");
var utils = require("./utils");
var webpack = require("webpack");
var config = require("../config");
var merge = require("webpack-merge");
var commonWebpackConfig = require("./webpack.dist.common.conf");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Components = require('../components.json');
var webpackConfig = merge(commonWebpackConfig, {
  entry:Components,
  output: {
    filename: "[name].js"
  },
  plugins: [
    // extract css into its own file
    new ExtractTextPlugin({
      filename: "[name].css"
    })
  ]
});

module.exports = webpackConfig;
