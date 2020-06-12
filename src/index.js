import React from 'react'
import ReactDOM from 'react-dom'
import Catalogue, { serviceWorker } from '@libp2p/observer-catalogue'

import widgets from './widgets.js'

const title = 'libp2p Observation Deck'

ReactDOM.render(
  <Catalogue widgets={widgets} title={title} />,
  document.getElementById('root')
)
serviceWorker.register()
