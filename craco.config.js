// crago.config.js
// see: https://github.com/sharegate/craco

const path = require('path')
const fs = require('fs')
const cracoBabelLoader = require('craco-babel-loader')
const cracoRawLoaderPlugin = require('@baristalabs/craco-raw-loader')

const appDirectory = fs.realpathSync(process.cwd())
const resolvePackage = relativePath => path.resolve(appDirectory, relativePath)

const includes = [
  'catalogue',
  'shell',
  'sdk',
  'connections-table',
  'streams-table',
  'events-table',
  'dht-buckets',
].map(name => resolvePackage(`node_modules/@libp2p/observer-${name}`))

module.exports = {
  babel: { plugins: ['babel-plugin-styled-components'] },
  plugins: [
    {
      plugin: {
        overrideJestConfig: ({ jestConfig }) => {
          jestConfig.transform['^.+\\.(js|jsx|ts|tsx)$'] = ['babel-jest']
          return jestConfig
        },
      },
    },
    {
      plugin: cracoBabelLoader,
      options: {
        includes,
      },
    },
    {
      plugin: cracoRawLoaderPlugin,
      options: {
        test: /(\.md$|\.base64$)/,
      },
    },
  ],
}
