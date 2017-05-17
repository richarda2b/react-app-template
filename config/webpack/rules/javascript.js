const paths = module.require('../paths');

module.exports = (
  {
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    options: {
      presets: [
        'react',
        'stage-2'
      ]
    },
    exclude: paths.modules
  }
)
