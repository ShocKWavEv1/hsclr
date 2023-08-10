/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['three']);

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { dir } = options
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    }),
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    }),
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ["raw-loader"],
    });
    return config
  },
}

module.exports = nextConfig
