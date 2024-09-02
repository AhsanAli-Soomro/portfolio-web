import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  webpack(config, { isServer }) {
    config.plugins.push(new CaseSensitivePathsPlugin());

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname),
    };

    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', ...(config.resolve.extensions || [])];

    return config;
  },
};
