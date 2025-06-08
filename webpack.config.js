const path = require("path");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const sveltePreprocess = require("svelte-preprocess");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ENTRYPOINTS = ["404", "index"];

module.exports = (env) => {
  const githubPages = env?.githubPages === "true" || false;

  const outputPath = githubPages
    ? path.resolve("docs")
    : path.resolve(__dirname, "dist");
  // const publicPath = githubPages ? "/roseforgrovechessclub/" : "/";
  const publicPath = "/";
  const mode = "development";

  console.log("Building for GitHub Pages:", githubPages);

  return {
    mode,
    entry: Object.fromEntries(
      ENTRYPOINTS.map((entry) => [`${entry}`, `./src/${entry}/index.ts`]),
    ),
    plugins: ENTRYPOINTS.map(
      (entry) =>
        new HtmlWebpackPlugin({
          title: "Rose Forgrove Chess Club",
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
      filename: "[name]-[fullhash].js",
      path: outputPath,
      publicPath,
      clean: true,
    },
    devServer: {
      server: "https",
      static: {
        directory: outputPath,
        watch: true,
      },
      historyApiFallback: {
        index: "404.html",
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
};
