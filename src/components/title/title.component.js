import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ children, className }) => (
  <p className={className}>
    {children}
  </p>
)

Title.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
}

export default Title