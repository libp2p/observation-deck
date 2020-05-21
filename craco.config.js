// crago.config.js
// see: https://github.com/sharegate/craco

const path = require('path')
const fs = require('fs')
const cracoBabelLoader = require('craco-babel-loader')
const cracoRawLoaderPlugin = require('@baristalabs/craco-raw-loader')
const { widgetPackageNames } = require('./src/widgets')

const appDirectory = fs.realpathSync(process.cwd())
const resolvePackage = relativePath => path.resolve(appDirectory, relativePath)

const includes = [
  /observer-catalogue/,
  /observer-shell/,
  /observer-sdk/,
  ...widgetPackageNames
]

module.exports = {
  babel: { plugins: ['babel-plugin-styled-components'] },
  plugins: [
    {
      plugin: {
        overrideJestConfig: ({ jestConfig, context: { rootDir } }) => {
          jestConfig.transform['^.+\\.(js|jsx|ts|tsx)$'] = [
            'babel-jest',
          ]

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
