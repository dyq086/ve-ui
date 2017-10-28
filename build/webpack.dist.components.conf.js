var path = require("path");
var webpack = require("webpack");
var merge = require("webpack-merge");
var commonWebpackConfig = require("./webpack.dist.common.conf");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Components = require('../components.json');
var webpackConfig = merge(commonWebpackConfig, {
  entry:Components,
  output: {
    filename: "[name].js",
    libraryTarget: "umd"
  },
  plugins: [
    // extract css into its own file
    new ExtractTextPlugin({
      filename: "temp/[name].css"
    })
  ]
});

module.exports = webpackConfig;
