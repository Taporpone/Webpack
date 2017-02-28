var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var OptimizeJsPlugin = require('optimize-js-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path:'./build',
    filename:'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader:"babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  ]
};
