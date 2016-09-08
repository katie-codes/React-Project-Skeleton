var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'client.js'),
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist",
 },
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015']
            }
          },
          {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract('css!sass')
          }
        ]
    },
    plugins: [
        new ExtractTextPlugin('dist/styles/main.css', {
            allChunks: true
        })
    ]
};