const path = require('path');
const shared = require('./shared'); 

module.exports = Object.assign(shared, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    publicPath: '/dist/',
  },
});
