"use strict";
const path = require("path");

let webpackConf = {
  mode: 'production',
  entry: "./src/tableList.js",
  output: {
    path: path.resolve("./lib"),
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
  }
};

module.exports = webpackConf;