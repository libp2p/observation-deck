import React from 'react'
import ReactDOM from 'react-dom'
import Catalogue, { serviceWorker } from '@nearform/observer-catalogue'

import widgets from './widgets.js'

const title = 'LibP2P Observation Deck'

ReactDOM.render(
  <Catalogue widgets={widgets} title={title} />,
  document.getElementById('root')
)
serviceWorker.register()
