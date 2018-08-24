import React, {Component} from 'react'
import {
  Navbar
} from '../'
import {withRouter, Route} from 'react-router-dom'

class Routes extends Component {
  render () {
    return (
//      <Route path="/" component={Navbar} />
      <div>Hello from Routes.js</div>
    )
  }
}

export default Routes