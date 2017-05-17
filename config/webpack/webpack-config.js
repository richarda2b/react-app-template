const jsRules = module.require('./rules/javascript');
const cssRules = module.require('./rules/css');
const paths = module.require('./paths');
const webpack = require('webpack');

module.exports = {
  entry: './src/client',
  output: {
    path: paths.assets,
    publicPath: paths.public,
    filename: 'bundle.js'
  },
  resolve: {
    modules: [paths.modules, paths.src],
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      jsRules,
      cssRules
    ]
  }
}
