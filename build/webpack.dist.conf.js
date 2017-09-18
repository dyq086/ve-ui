var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var packageJson = require('../package.json')

var env = process.env.NODE_ENV === 'testing' ?
  require('../config/test.env') :
  config.build.env


var banner =
  '/*!\n' +
  ' * ETC UI v' + packageJson.version + ' (https://github.com/dyq086/vue-etc-ui)\n' +
  ' * (c) ' + new Date().getFullYear() + ' 粤通卡ETC车宝前端团队\n' +
  ' * Released under the MIT License.\n' +
  ' */';

delete baseWebpackConfig.entry
var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  entry: {
    // "/lib/button/index": "./src/components/button/index.js",
    // "/lib/dialog/index": "./src/components/dialog/index.js",
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'vue-etc-ui.js',
    library: 'ETC-UI',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs2: 'vue',
      amd: 'vue',
      commonjs: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   sourceMap: true
    // }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: 'vue-etc-ui.css'
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   chunks: ['vendor']
    // }),
    new webpack.BannerPlugin({ banner: banner, raw: true, entryOnly: true })
  ]
})

module.exports = webpackConfig
