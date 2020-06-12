import React from 'react'
import ReactDOM from 'react-dom'
import Catalogue, { serviceWorker } from '@libp2p/observer-catalogue'

import widgets from './widgets.js'

import about from './about.md'
import contribute from './contribute.md'

const title = 'libp2p observation deck'

const content = [
  { title: 'About', content: about },
  { title: 'Contribute', content: contribute },
  { title: 'GitHub', url: 'https://github.com/libp2p/observation-deck' },
  {
    title: 'Documentation',
    url: 'https://github.com/libp2p/observation-deck#readme',
  },
]

ReactDOM.render(
  <Catalogue widgets={widgets} title={title} content={content} />,
  document.getElementById('root')
)
serviceWorker.register()
