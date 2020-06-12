/* eslint-disable */

import 'jest-styled-components'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom/extend-expect'
import fs from 'fs'
import path from 'path'

jest.setTimeout(15000)

global.fetch = async filepath => {
  if (path.extname(filepath) === '.mock') {
    const samplesPath = path.dirname(
      require.resolve('@libp2p/observer-samples')
    )
    filepath = path.resolve(samplesPath, 'samples', path.basename(filepath))
  }

  const buffer = await fs.promises.readFile(filepath)
  return {
    ok: !!buffer,
    arrayBuffer: async () => {
      const arrayBuffer = new ArrayBuffer(buffer.length)
      const view = new Uint8Array(arrayBuffer)
      let i = 0
      const length = buffer.length
      while (i < length) {
        view[i] = buffer[i]
        i++
      }
      return buffer
    },
  }
}
