import React, { lazy, useMemo, ReactChild } from 'react'
import { useRoutes, Route } from 'react-router-dom'

import { Button } from 'antd-mobile'
import Dashboard from 'pages/dashboard'
import LoginPage from 'pages/login'
import LayoutPage from 'pages/layout'
import { UnAuthorized } from 'components/unExpection'

// const NotFound = lazy(() => import('pages/404'))
// const Documentation = lazy(() => import('pages/doucumentation'))
// const PermissionConfig = lazy(() => import('pages/permission/config'))
// const AccountPage = lazy(() => import('pages/account'))

const NotFound = function (){
  return <>NotFound</>
}
const Documentation = function (){
  return <>Documentation</>
}
const PermissionConfig = function (){
  return <>PermissionConfig</>
}
const AccountPage = function (){
  return <>
  <Button type="primary">primary</Button>
  </>
}

type ListNode = {
  path: string
  auth?: boolean
  element?: ReactChild
  children?: ListNode[]
}

type RouteListType = ListNode[]

export const routeList: RouteListType = [
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '',
    element: <LayoutPage />,
    children: [
      {
        path: '/account',
        element: <AccountPage />
      },
      {
        path: '/permission',
        auth: true,
        element: <PermissionConfig />
      },
    ]
  },
  {
    path: '/documentation',
    auth: true,
    element: <Documentation />
  },
 
  {
    path: '*',
    element: <NotFound />
  }
]

const RenderRouter = () => {
  const memoizedRouterList = useMemo(() => {
    function convertMenuToRoute(list: RouteListType): RouteListType {
      return list.map(({ path, auth, element: Ele, children }) => {
        // console.log('auth: ', auth) // 权限相关, 据业务而定
        const item: ListNode = { path }

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
