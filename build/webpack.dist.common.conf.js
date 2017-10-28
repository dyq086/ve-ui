var path = require("path");
var utils = require("./utils");
var webpack = require("webpack");
var config = require("../config");
var merge = require("webpack-merge");
var baseWebpackConfig = require("./webpack.base.conf");
var OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
var packageJson = require("../package.json");

var banner =
  "/*!\n" +
  " * VUE ETC UI v" +
  packageJson.version +
  " (https://github.com/dyq086/vue-etc-ui)\n" +
  " * (c) " +
  new Date().getFullYear() +
  " 粤通卡ETC车宝前端团队\n" +
  " * Released under the MIT License.\n" +
  " */";
delete baseWebpackConfig.entry;
var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  output: {
    path: path.resolve(__dirname, "../lib"),

  },
  externals: {
    vue: {
      root: "Vue",
      commonjs2: "vue",
      amd: "vue",
      commonjs: "vue"
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new webpack.BannerPlugin({ banner: banner, raw: true, entryOnly: true })
  ]
});

module.exports = webpackConfig;
