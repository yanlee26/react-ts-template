import React, { useEffect, Suspense } from 'react'
import { Layout } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router'

import { menuList } from 'config/menus'
import { FallbackLoading } from 'components/loading/FallbackLoading'
import { setGlobalCollapsed, selectGlobal } from 'store/globalSlice'
import { MenuContainer } from './menu'
import { HeaderContainer } from './header'
import TagsView from './tagView'

import { LayoutContainer } from './style'

const { Sider, Content } = Layout
const WIDTH = 992

const LayoutPage = () => {
  const { collapsed } = useSelector(selectGlobal)
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/dashboard')
    }
  }, [navigate, location])

  const toggle = () => {
    dispatch(
      setGlobalCollapsed({
        collapsed: !collapsed
      })
    )
  }

  useEffect(() => {
    window.onresize = () => {
      const rect = document.body.getBoundingClientRect()
      const needCollapse = rect.width < WIDTH
      dispatch(
        setGlobalCollapsed({
          collapsed: needCollapse
        })
      )
    }
  }, [dispatch])

  return (
    <LayoutContainer>
      <HeaderContainer collapsed={collapsed} toggle={toggle} />
      <Layout>
        <Sider className="layout-page-sider" trigger={null} collapsible collapsed={collapsed} breakpoint="md">
          <MenuContainer menuList={menuList} />
        </Sider>
        <Content className="layout-page-content">
          <TagsView />
          <Suspense fallback={<FallbackLoading />}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </LayoutContainer>
  )
}

export default LayoutPage
