//import webpack from "webpack";
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  context: path.join(__dirname, "src/"),
  entry: {
    all: "./css/all.css.scss",
    font_awesome: "./javascript/font_awesome.js"
  },
  output: {
    path: path.join(__dirname, "static"),
    filename: "[name].css"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
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
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            },
          },
          'css-loader'
        ]
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',    // where the fonts will go
            publicPath: '../'       // override the default path
          }
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
}]
