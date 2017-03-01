var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var OptimizeJsPlugin = require('optimize-js-plugin');
var env = process.env.NODE_ENV || 'development';
var path = require('path');

console.log(env);

var config = {
  entry: ['react-hot-loader/patch',
  './src/index.js'],
  output: {
    path: path.join( __dirname, './build'),
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
    })
  ]
};
if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  );
}

module.exports = config;
