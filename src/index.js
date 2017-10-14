import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'rxjs'

import store from './redux/store'
import App from './containers/App'

const Root = () =>
  <Provider store={store}>
    <App />
  </Provider>

render(<Root />, document.querySelector('react'))
