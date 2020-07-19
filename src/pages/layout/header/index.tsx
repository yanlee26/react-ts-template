import React from 'react'
import { Dropdown, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import Avator from 'assets/header/avator.jpeg'
import ReactSvg from 'assets/logo/react.svg'
import AntdSvg from 'assets/logo/antd.svg'
import { logoutAsync, selectUser } from 'store/userSlice'

import { LayoutHeader } from '../style'

interface Props {
  collapsed: boolean
  toggle: () => void
}

type Action = 'userInfo' | 'userSetting' | 'logout'

export const HeaderContainer = ({ collapsed, toggle }: Props) => {
  const { logged } = useSelector(selectUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onActionClick = async (action: Action) => {
    switch (action) {
      case 'userInfo':
        return
      case 'userSetting':
        return
      case 'logout':
        const res = await dispatch(logoutAsync())
        res && navigate('/login')
        return
    }
  }

  const toLogin = () => {
    navigate('/login')
  }

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <span>
          <UserOutlined />
          <span onClick={() => navigate('/account')}>账户</span>
        </span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        <span>
          <LogoutOutlined />
          <span onClick={() => onActionClick('logout')}>退出</span>
        </span>
      </Menu.Item>
    </Menu>
  )
  return (
    <LayoutHeader>
      <div className="logo" style={{ width: collapsed ? 80 : 200 }}>
        <img src={ReactSvg} alt="" style={{ marginRight: collapsed ? '2px' : '20px' }} />
        <img src={AntdSvg} alt="" />
      </div>
      <div className="layout-page-header-main">
        <div onClick={toggle}>
          <span id="sidebar-trigger">{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
        </div>
        <div className="actions">
          {logged ? (
            <Dropdown overlay={menu} trigger={['click']}>
              <span className="user-action">
                <img src={Avator} alt="Avator" className="user-avator" />
              </span>
            </Dropdown>
          ) : (
            <span style={{ cursor: 'pointer' }} onClick={toLogin}>
              login
            </span>
          )}
        </div>
      </div>
    </LayoutHeader>
  )
}
