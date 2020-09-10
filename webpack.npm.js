"use strict";
const path = require("path"),
  { CleanWebpackPlugin } = require('clean-webpack-plugin');

let webpackConf = {
  mode: 'production',
  entry: "./src/tableList.js",
  output: {
    path: path.resolve("./dist"),
    filename: "tableList.min.js",
    libraryTarget: 'umd',
    umdNamedDefine: true
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
    })
  ]
};

module.exports = webpackConf;