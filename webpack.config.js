const path = require("path");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const sveltePreprocess = require("svelte-preprocess");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ENTRYPOINTS = ["about"];

const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

module.exports = {
  mode: "development",
  entry: Object.fromEntries(
    ENTRYPOINTS.map((entry) => [`${entry}`, `./src/${entry}.ts`]),
  ),
  plugins: ENTRYPOINTS.map(
    (entry) =>
      new HtmlWebpackPlugin({
        title: capitalize(entry),
        chunks: [entry],
        filename: `${entry}.html`,
      }),
  ).concat([
    new MiniCssExtractPlugin({ filename: "[name]-[contenthash].css" }),
  ]),
  module: {
    rules: [
      {
        test: /\.(svelte)$/,
        use: {
          loader: "svelte-loader",
          options: {
            preprocess: sveltePreprocess({ typescript: true }),
            compilerOptions: {
              dev: true,
            },
            emitCss: true,
            hotReload: true,
          },
        },
      },
      {
        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: true, // necessary if you use url('/path/to/some/asset.png|jpg|gif')
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "[contenthash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "[contenthash][ext]",
        },
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".mjs", ".js", ".wasm", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
    conditionNames: ["svelte", "browser", "import"],
  },

  output: {
    filename: (pathData) =>
      pathData.runtime === "serviceWorker"
        ? "[name].js"
        : "[name]-[fullhash].js",
    path: path.resolve(__dirname, "dist/frontend"),
    publicPath: "/",
    clean: true,
  },
  devServer: {
    server: "https",
    static: {
      directory: path.join(__dirname, "dist"),
      watch: true,
    },
    historyApiFallback: {
      index: "notFound.html",
      verbose: true,
      rewrites: ENTRYPOINTS.map((entry) => ({
        from: new RegExp(`^\/${entry}(\/.*)?$`), // Updated regex pattern to match the specific entry point path
        to: `/${entry}.html`,
      })),
    },
    compress: true,
    port: 9000,
  },
};
