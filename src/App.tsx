import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import { GlobalStyle } from './style'
import RenderRouter from './routes'

function TabBar() {
  return (
    <div className="tabbar">
      <Link className="tabbar-item" to="/dashboard">dashboard</Link>
      <Link className="tabbar-item" to="/account">account</Link>
      <Link className="tabbar-item" to="/permission">permission</Link>
      <Link className="tabbar-item" to="/login">login</Link>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN} componentSize="middle">
      <BrowserRouter>
        <GlobalStyle />
        <RenderRouter />
        {/* {renderRoutes(routeList)} */}
        <TabBar />
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
