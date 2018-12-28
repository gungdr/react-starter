import React from 'react'

import Link from './link'
import Router from './router'

const AppNavigation = () => (
  <Router>
    <Link to='/' >Home</Link>
    <Link to='/about'>About</Link>
  </Router>
)

export default AppNavigation
