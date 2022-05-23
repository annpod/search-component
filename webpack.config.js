const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')

module.exports = ({ env }) => {
  const envConfig = require(`./webpack.${env}.js`)
  return merge(
    {
      mode: env,
      entry: path.resolve(__dirname, 'src/index.tsx'),
      resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
          root: __dirname,
        },
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: '$',
        libraryTarget: 'umd',
      },
      externals: [nodeExternals()],
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: 'babel-loader',
          },
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'ts-loader',
                options: {
                  configFile: 'tsconfig.webpack.json',
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': JSON.stringify(process.env),
        }),
      ],
    },
    envConfig
  )
}
