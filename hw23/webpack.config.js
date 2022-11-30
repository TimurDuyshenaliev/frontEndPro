const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: {
        main:[path.join(__dirname, 'src/script.js'), path.join(__dirname, 'src/style.scss')],
  },
  output: { path: path.join(__dirname, 'dist'), filename:'[name].js'},
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "[name].css",
    }),
  ],
};