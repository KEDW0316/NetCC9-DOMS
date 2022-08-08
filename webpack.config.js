const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const BASE_JS = "./src/public/javascripts/";

module.exports = {
  entry: {
    MarkerClustering: BASE_JS + "MarkerClustering.js",
    sideInformation: BASE_JS + "sideInformation.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  output: {
    filename: "./javascripts/[name].js",
    path: path.resolve(__dirname, "assets"),
    clean: true,
  },
  resolve: {},

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
