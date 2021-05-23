const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: './',
    open: true,
    port: 9000,
    publicPath: './',
    watchContentBase: true,
    hot: true,
    inline: true
  },

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './src/index.html',
  //   }),
  //   new CleanWebpackPlugin()
  // ]
};
