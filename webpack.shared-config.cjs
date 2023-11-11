// Refer to the official webpack guides: https://webpack.js.org/guides/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    page2: "./src/page2.js",
    page3: "./src/page3.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "pixijsPlayground: Index",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      title: "pixijsPlayground: Page2",
      inject: true,
      chunks: ["page2"],
      filename: "page2.html",
    }),
    new HtmlWebpackPlugin({
      title: "pixijsPlayground: Page3",
      inject: true,
      chunks: ["page3"],
      filename: "page3.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
