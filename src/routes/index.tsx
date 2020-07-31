import React, { lazy, useMemo, ReactChild } from 'react'
import { useRoutes, Route } from 'react-router-dom'

import Dashboard from 'pages/dashboard'
import LoginPage from 'pages/login'
import LayoutPage from 'pages/layout'
import { UnAuthorized } from 'components/unExpection'

const NotFound = lazy(() => import('pages/404'))
const Documentation = lazy(() => import('pages/doucumentation'))
const PermissionConfig = lazy(() => import('pages/permission/config'))
const AccountPage = lazy(() => import('pages/account'))

type ListNode = {
  path: string
  auth?: boolean
  element?: ReactChild
  children?: ListNode[]
}

type RouteListType = ListNode[]

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
    function convertMenuToRoute(list: RouteListType) {
      return list.map(({ path, auth, element: Ele, children }) => {
        // console.log('auth: ', auth) // 权限相关, 据业务而定
        const item: ListNode = { path }

        item.element = <Route element={!auth ? (Ele as any) : <UnAuthorized />} />
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
