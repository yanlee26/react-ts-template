import React, { lazy, useMemo, ReactChild } from 'react'
import { useRoutes, Route } from 'react-router-dom'

import Dashboard from 'pages/dashboard'
import LoginPage from 'pages/login'
import LayoutPage from 'pages/layout'
import { UnAuthorized } from 'components/UnExpection'

const NotFound = lazy(() => import('pages/404'))
const Documentation = lazy(() => import('pages/doucumentation'))
const PermissionConfig = lazy(() => import('pages/permission/config'))
const AccountPage = lazy(() => import('pages/account'))

interface CustomRouterObjectChildren {
  path: string
  auth?: boolean
  element?: ReactChild
}
interface CustomRouterObject extends CustomRouterObjectChildren {
  children?: CustomRouterObjectChildren[]
}
type RouteListType = CustomRouterObject[]

const routeList: RouteListType = [
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: '',
    element: <LayoutPage />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'documentation',
        auth: true,
        element: <Documentation />
      },
      {
        path: 'permission/config',
        element: <PermissionConfig />
      },
      {
        path: 'account',
        element: <AccountPage />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]

const RenderRouter = () => {
  const memoizedRouterList = useMemo(() => {
    function convertMenuToRoute(list: RouteListType): RouteListType {
      return list.map(({ path, auth, element: Ele, children }) => {
        // console.log('auth: ', auth) // 权限相关, 据业务而定
        const item: CustomRouterObject = { path }

        item.element = !auth ? <Route element={Ele as any} /> : <UnAuthorized />
        if (children) {
          item.children = convertMenuToRoute(children)
        }
        return item
      })
    }

    return convertMenuToRoute(routeList)
  }, [])

  const element = useRoutes(memoizedRouterList)
  return element
}

export default RenderRouter
