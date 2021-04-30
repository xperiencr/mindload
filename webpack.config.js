const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    popup: './src/popup/index.js',
    archive: './src/archive/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'extension/dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    alias: {
      'state': path.resolve(__dirname, 'src/state'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../../dist',
            },
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin(['dist'])],
};
