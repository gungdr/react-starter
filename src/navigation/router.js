import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home, About } from '../containers'

const Router = ({ children }) => (
  <BrowserRouter>
    <>
      {children}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </>
  </BrowserRouter>
)

Router.propTypes = {
  children: PropTypes.any.isRequired
}

export default Router
