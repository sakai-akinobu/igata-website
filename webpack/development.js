const shared = require('./shared'); 

module.exports = Object.assign(shared, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
  },
});
