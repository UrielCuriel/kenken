var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'), // source folder path ->
  JS: path.resolve(__dirname, 'src/js'),
  SCSS: path.resolve(__dirname, 'src/scss'),
};

// Webpack configuration
module.exports = {
  mode: 'development',
  entry: path.join(paths.JS, 'app.ts'),
  output: {
    path: paths.DIST,
    filename: 'kenken.js'
  },
  devServer: {
    contentBase: paths.SRC,
  },
  module: {
    rules: [{
        test: /\.(js|tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          'ts-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'dist/kenken.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.tsx','.ts'],
  },
};
