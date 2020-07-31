import React, {  Suspense } from 'react'
import { Outlet } from 'react-router'

import { FallbackLoading } from 'components/loading/FallbackLoading'
import { LayoutContainer } from './style'


const LayoutPage = () => {
  

  return (
    <LayoutContainer>
        <div className="layout-page-content">
          <Suspense fallback={<FallbackLoading />}>
            <Outlet />
          </Suspense>
        </div>
    </LayoutContainer>
  )
}


export default LayoutPage
