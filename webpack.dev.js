"use strict";
const path = require("path"),
  HtmlwebpackPlugin = require('html-webpack-plugin'), 
  { CleanWebpackPlugin } = require('clean-webpack-plugin');

let webpackConf = {
  entry: "./test/index.js",
  output: {
    path: path.resolve("./lib"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve("./lib"),
    compress: true,
    host: "0.0.0.0",
    port: 5750,
    hot: true,
  },
  externals: {
    angular: "angular"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'raw-loader',
        include: /tableList.html/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanStaleWebpackAssets: false // Automatically remove all unused webpack assets on rebuild
    }),
    new HtmlwebpackPlugin({
      title: 'table-list',
      template: './test/index.html',
      filename: 'index.html',
      hash: true,
      minify: {
        removeComments: true, //清除注释
        collapseWhitespace: true //清理空格
      }
    })
  ]
};

module.exports = webpackConf;