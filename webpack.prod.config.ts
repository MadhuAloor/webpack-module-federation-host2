import {baseConfig} from './webpack.base.config'
import { Configuration } from "webpack";
import {merge} from "webpack-merge"

const config: Configuration = merge(baseConfig, {
  mode: "production",
});

export default config;