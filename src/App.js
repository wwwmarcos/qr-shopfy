import React from 'react'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { AppHistory } from './store/middlewares/router'

import { Login, Home, QrCodeReader } from './containers'

const App = () => (
  <div>
    <ConnectedRouter history={AppHistory}>
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/qrcode' component={QrCodeReader} />
      </div>
    </ConnectedRouter>
  </div>
)

export default App
