const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: require('./.babelrc.js'),
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [
          {
          //   loader: 'style-loader',
          //   options: {
          //     // injectType: 'styleTag',
          //   },
          // }, {
            loader: 'isomorphic-style-loader',
            // loader: MiniCssExtractPlugin.loader,
          }, {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"]
  }
};


const ssr = {
  ...config,
  target: 'node',
  entry: {
    server: './src/server.js',
  },
  output: {
     path: path.resolve(__dirname, "dist"),
     filename: "[name].js"
  }
};


const client = {
  ...config,
  entry: {
    app: "./src/components/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/public"),
    filename: "[name].js"
  },
};


module.exports = [
  ssr,
  client,
]
