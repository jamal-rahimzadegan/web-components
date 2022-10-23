const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = [
  new HtmlWebpackPlugin({ template: "./public/index.html" }),
  new CleanWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin({}),
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("development"),
  }),
];
