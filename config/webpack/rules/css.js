const paths = module.require('../paths');
const postcssnext = require('postcss-cssnext')();

module.exports = (
  {
    test: /\.css$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          module: true
        }
      },
      {
        loader: "postcss-loader",
        options: {
          plugins: [
            postcssnext
          ]
        }
      }
    ]
  }
)
