const PATH = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  source: PATH.join(__dirname, 'js'),
  build: PATH.join(__dirname, 'build/js'),
};

const conf = {

  context: PATHS.source,

  entry: {
    index: './script.js',
  },

  output: {
    filename: '[name].js',
    path: PATHS.build,
    publicPath: '/build/', // required for webpack-dev-server
  },

  plugins: [
    new CaseSensitivePathsPlugin(),
    new MiniCssExtractPlugin({ filename: '../css/style.css' }),
  ],

  devServer: {
    overlay: true,
    contentBase: PATH.join(__dirname),
    watchContentBase: true,
    watchOptions: {
      poll: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          // fallback to style-loader in development
          (process.env.NODE_ENV && process.env.NODE_ENV.trim()) !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '../img',
              outputPath: '../img',
            },
          },
        ],
      },
    ],
  },
};

module.exports = (env, argv) => {
  conf.devtool = argv.mode === 'development' ? 'source-map' : false; // source-map was choosen because css-loader source-map don't work with eval
  return conf;
};
