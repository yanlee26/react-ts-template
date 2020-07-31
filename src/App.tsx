import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom'

import { GlobalStyle } from './style'
import RenderRouter from './routes'

function TabBar() {
  return (
    <div className="tabbar">
      <Link className="tabbar-item" to="/dashboard">dashboard</Link>
      <Link className="tabbar-item" to="/account">account</Link>
      <Link className="tabbar-item" to="/documentation">documentation</Link>
    </div>
  )
}

const App = () => {
  return (
      <BrowserRouter>
        <GlobalStyle />
        <RenderRouter />
        <TabBar />
      </BrowserRouter>
  )
}

export default App
