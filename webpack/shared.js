const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 2,
                sourceMap: true,
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'expanded',
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  require('autoprefixer')(),
                ],
              },
            },
          ],
        }),
      },
      {
        test: /\/node_modules\/.*\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
          ],
        }),
      }
    ],
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.scss',
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
};
