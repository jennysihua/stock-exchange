import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import {Routes} from './components'
import history from './history'

render(
//  <Provider store={store}>
  <Router history={history}>
    <Routes />
  </Router>,
//  </Provider>,
  document.getElementById('app')
)
