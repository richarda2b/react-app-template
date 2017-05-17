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
      }
    ]
  }
)
