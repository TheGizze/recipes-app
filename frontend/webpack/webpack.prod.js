const merge = require('webpack-merge');
const common = require('../webpack.common.js');
const CSPHTMLWebpackPlugin = require('csp-html-webpack-plugin');
module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [new CSPHTMLWebpackPlugin()],
});
