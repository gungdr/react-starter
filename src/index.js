import React from 'react'
import ReactDOM from 'react-dom'

import { Home } from './containers'
import { serviceWorker } from './workers'

import './index.css'

ReactDOM.render(
  <Home />, document.getElementById('app')
)

serviceWorker.unregister()
