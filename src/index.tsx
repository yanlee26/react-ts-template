import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'antd/dist/antd.min.css'

import store from './store'
import * as serviceWorker from './serviceWorker'
import App from './App'
import './mock'

const render = (Router: React.FC) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById('root')
  )
}

render(App)

// hmr enable
if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./App', () => {
    const Router = require('./App').default
    render(Router)
  })
}

serviceWorker.unregister()
