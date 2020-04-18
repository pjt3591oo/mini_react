let webpack = require('webpack')
let path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin');

const output = "main.js"

module.exports = {
  entry: {
    main: "./app.js",
  },
  output: {
    filename: output,
    path: "/Users/bagjeongtae/Desktop/react_hook/build"
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './static/index.html'),
      inject: true,
      filename: path.join(__dirname, './build/index.html'),
      buildedFile: output,
      favicon: './static/favicon.ico'
  })
  ],
  mode: 'production'
}