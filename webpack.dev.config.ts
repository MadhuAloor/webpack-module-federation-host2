import path from "path";
import { Configuration as WebpackConfiguration, HotModuleReplacementPlugin } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import {merge} from "webpack-merge"
import {baseConfig} from './webpack.base.config'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const devConfig:Configuration = merge(baseConfig, {
  mode: "development",
  output: {
    publicPath: "auto",
  },
  devtool: "inline-source-map",
  plugins: [
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    historyApiFallback: true,
    port: 2001,
    open: true,
    hot: true,
  },
});

export default devConfig;