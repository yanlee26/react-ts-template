import React, {  useMemo, ReactChild } from 'react'
import { useRoutes, Route } from 'react-router-dom'

import LayoutPage from 'pages/layout'

import NotFound  from 'pages/404'
import Documentation  from 'pages/doucumentation'
import AccountPage  from 'pages/account'

type ListNode = {
  path: string
  auth?: boolean
  element?: ReactChild
  children?: ListNode[]
}

type RouteListType = ListNode[]

export const routeList: RouteListType = [
  {
    path: '',
    element: <LayoutPage />,
    children: [
      {
        path: '/account',
        element: <AccountPage />
      },
      {
        path: '/documentation',
        element: <Documentation />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
  
]

const RenderRouter = () => {
  const memoizedRouterList = useMemo(() => {
    function convertMenuToRoute(list: RouteListType): RouteListType {
      return list.map(({ path, auth, element: Ele, children }) => {
        // console.log('auth: ', auth) // 权限相关, 据业务而定
        const item: ListNode = { path }

        item.element =  <Route element={ !auth ? Ele as any : <NotFound /> } /> 
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
