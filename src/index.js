import React from 'react'
import ReactDOM from 'react-dom'

import { serviceWorker } from './workers'
import { AppNavigation } from './navigation'

import './index.css'

ReactDOM.render(
  <AppNavigation />, document.getElementById('app')
)

serviceWorker.unregister()
