require("./check-versions")();

process.env.NODE_ENV = "production";

var ora = require("ora");
var rm = require("rimraf");
var path = require("path");
var chalk = require("chalk");
var webpack = require("webpack");
var config = require("../config");
var webpackConfig = require("./webpack.dist.conf");
var webpackComponentsConfig = require("./webpack.dist.components.conf");

var spinner = ora("正在构建组件...");
spinner.start();

rm(path.join(config.build.assetsRoot), err => {
  if (err) throw err;
  webpack(webpackConfig, function(err, stats) {
    spinner.stop();
    if (err) throw err;
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + "\n\n"
    );
    console.log(chalk.cyan("  构建主组件完成.\n"));
  });
  webpack(webpackComponentsConfig, function(err, stats) {
    spinner.stop();
    if (err) throw err;
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + "\n\n"
    );

    if (stats.hasErrors()) {
      console.log(chalk.red("  Build failed with errors.\n"));
      process.exit(1);
    }
    console.log(chalk.cyan("  构建子组件完成.\n"));
  });
});
