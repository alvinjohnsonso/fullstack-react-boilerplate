const path = require("path")
const common = require("./webpack.common")
const merge = require("webpack-merge")

module.exports = merge(common, {
  entry: path.resolve(__dirname, "src", "index.jsx"),
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "..", "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  watch: true,
  watchOptions: {
    poll: true
  }
})
