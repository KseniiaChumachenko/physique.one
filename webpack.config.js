/* eslint-env node */
const Dotenv = require("dotenv-webpack");
const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;

module.exports = (/* env = {} */) => {
  return {
    mode: NODE_ENV,

    node: { global: true },

    devtool: NODE_ENV === "development" ? "source-map" : false,

    entry: {
      app: "src",
    },

    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "build"),
      publicPath: "/",
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js"],

      alias: {
        src: path.resolve(__dirname, "src/"),
      },
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          use: "babel-loader",
        },

        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: "graphql-tag/loader",
        },
      ],
    },

    loader: {
      test: /\.(html|png|ico|json)$/,
      loader: "file?name=[path][name].[ext]&context=./static",
    },

    plugins: [
      NODE_ENV === "development"
        ? new Dotenv()
        : new webpack.EnvironmentPlugin([
            "NODE_ENV",
            "GQL_WS_ENDPOINT",
            "GQL_HTTPS_ENDPOINT",
            "FACEBOOK_APP_ID",
            "HASURA_ADMIN_SECRET",
          ]),

      new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 20000,
      }),
      new CopyWebpackPlugin([{ from: "public" }]),
    ],

    devServer: {
      hot: true,
      host: "::", // Listens on all IPv4 and IPv6 interfaces
      port: 3000,
      historyApiFallback: true,
    },
  };
};
