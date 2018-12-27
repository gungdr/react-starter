import React from 'react'

import { Title } from '../../components'
import './home.style.css'

class Home extends React.Component {

  render() {
    return (
      <div className='center'>
        <Title className='title'>
          this is your home screen
        </Title>
      </div>
    )
  }

}

export default Home
