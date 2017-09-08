//import webpack from "webpack";
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  context: path.join(__dirname, "src/css"),
  entry: {
    all: "./all.css.scss"
  },
  output: {
    path: path.join(__dirname, "static/css"),
    filename: "[name].css"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: "css-loader",
              options: {
                url: false,
                minimize: true
              }
            },
            "sass-loader"
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}]
