const path = require('path');

const shared = require('./shared');

module.exports = Object.assign(shared, {
  mode: 'production',
  entry: './src/scripts/prerender/index.tsx',
  output: {
    filename: 'prerender.js',
    path: path.resolve(__dirname, '../tmp'),
  },
});
