import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Octavius'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <div>
      </div>
      )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
