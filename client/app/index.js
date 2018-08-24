import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import Root from './components'

render(
//  <Provider store={store}>
  <Router history={history}>
  <App />
  </Router>
//  </Provider>,
  document.getElementById('app')
)
