const path = require('path');

const shared = require('./shared'); 

module.exports = Object.assign(shared, {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public/dist'),
  },
});
