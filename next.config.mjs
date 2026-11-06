import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  async redirects() {
    return [
      // 301 Domain Migration Redirects from old domains to canonical https://ahsanalisoomro.com
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ahsanalisoomro.vercel.app',
          },
        ],
        destination: 'https://ahsanalisoomro.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ahsansoomro.com',
          },
        ],
        destination: 'https://ahsanalisoomro.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.ahsansoomro.com',
          },
        ],
        destination: 'https://ahsanalisoomro.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.ahsanalisoomro.com',
          },
        ],
        destination: 'https://ahsanalisoomro.com/:path*',
        permanent: true,
      },
    ];
  },

  webpack(config, { isServer }) {
    config.plugins.push(new CaseSensitivePathsPlugin());

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname),
      '@config': path.resolve(__dirname, 'src/config'),
    };

    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', ...(config.resolve.extensions || [])];

    return config;
  },
};
