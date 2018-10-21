const path = require('path');

const shared = require('./shared'); 

module.exports = Object.assign(shared, {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public/dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    publicPath: '/dist/',
  },
});
