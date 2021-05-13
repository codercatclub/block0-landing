const path = require('path');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.js',
    ui: './src/ui.js',
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.glsl$/,
        loader: 'webpack-glsl-loader',
      },
    ],
  },
  plugins: [
    new Dotenv({ systemvars: true }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/index.html',
          to: '.',
        },
        {
          from: 'src/contacts.html',
          to: '.',
        },
        {
          from: 'src/news.html',
          to: '.',
        },
        {
          from: 'src/styles.css',
          to: '.',
        },
        {
          from: 'src/projects.html',
          to: '.',
        },
        {
          from: 'assets',
          to: 'assets',
        },
      ],
    }),
  ],
  performance: {
    maxEntrypointSize: 2000000, // 2MB
    maxAssetSize: 4000000, // 4MB
  },
  devServer: {
    contentBase: './dist',
    // compress: true,
    // disableHostCheck: true,
    // hot: false,
    // inline: false,
    port: 3000,
    host: '0.0.0.0',
    // https: true,
  },
};
