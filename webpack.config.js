const NodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(geojson)$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    static: path.resolve(__dirname, './dist')
  },
  externalsPresets: { node: true },
  externals: [NodeExternals()],
  plugins: [
    new NodemonPlugin(),
  ],
};
