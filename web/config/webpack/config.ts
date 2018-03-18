import * as path from 'path';
import { Configuration } from 'webpack';

const root = path.resolve(__dirname, "../../");

const config: Configuration = {
  mode: "development",

  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/../../dist"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        loader: "awesome-typescript-loader",
        options: { configFile: path.resolve(root, "tsconfig.dist.json") },
        test: /\.tsx?$/
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};

export default config;
