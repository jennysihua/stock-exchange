import React, {Component} from 'react'
import {
  Navbar,
  Portfolio
} from './'
import {withRouter, Route} from 'react-router-dom'

class Routes extends Component {
  render () {
    return (
      <div>
        <Route path="/" component={Navbar} />
        <Route path="/" component={Portfolio} />
      </div>
    )
  }
}

export default Routes