'use strict'

module.exports = function(api) {
  api.cache(true)

  const presets = ['@babel/env', '@babel/preset-react']

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    'babel-plugin-styled-components',
    'transform-es2015-modules-commonjs',
  ]

  const sourceType = 'module'

  return {
    plugins,
    presets,
    sourceType,
  }
}
