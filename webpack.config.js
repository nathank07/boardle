const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: "Boardle",
        template: 'src/index.html'
    })
  ],
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(svg)$/i,
            type: 'asset/resource',
        }, 
        {
          test: /\.ogg$/,
          use: 'file-loader'
        }
    ]
  }
};