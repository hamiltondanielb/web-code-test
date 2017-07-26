const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const postCSSCalc = require('postcss-calc')
const postCSSEach = require('postcss-each')
const postCSSNested = require('postcss-nested')
const postCSSModulesValues = require('postcss-modules-values')

const ROOT = path.resolve(__dirname, '../')

module.exports = {
  entry: {
    main: [
      path.resolve(ROOT, 'src/index.js'),
    ],
  },

  output: {
    filename: 'client/dist/main.js',
  },

  resolve: {
    modules: [
      path.resolve(ROOT, 'src'),
      'node_modules',
    ],
    extensions: ['.js'],
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [ 'babel-loader' ],
        exclude: /node_modules/,
      },
      {
        test: /^((?!\.global).)*css$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]',
          'postcss-loader',
        ],
      },
      {
        test: /\.global\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      }
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer,
          postCSSNested,
          postCSSEach,
          postCSSModulesValues,
          postCSSCalc,
        ],
      },
    }),
  ],

}
