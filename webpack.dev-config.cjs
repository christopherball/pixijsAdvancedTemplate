let { merge } = require("webpack-merge");

module.exports = merge(require("./webpack.shared-config.cjs"), {
  devtool: "inline-source-map",
  mode: "development",
});
