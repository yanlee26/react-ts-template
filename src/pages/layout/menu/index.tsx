import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Menu } from 'antd'

import { selectGlobal } from 'store/globalSlice'
import { MenuList } from 'interface/layout/menu.interface'
import { CustomIcon } from 'components/customIcon'
import { addTag } from '../tagView/tagViewSlice'

const { SubMenu, Item } = Menu

interface Props {
  menuList: MenuList
}

export const MenuContainer = ({ menuList }: Props) => {
  const [openKeys, setOpenkeys] = useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const { collapsed } = useSelector(selectGlobal)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const getTitie = (menu: MenuList[0]) => {
    return (
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <CustomIcon type={menu.icon!} />
        <span>{menu.label}</span>
      </span>
    )
  }

  const onMenuClick = (menu: MenuList[0]) => {
    if (menu.path === pathname) return
    const { key, label, path } = menu
    setSelectedKeys([key])
    dispatch(
      addTag({
        id: key,
        label,
        path,
        closable: true
      })
    )
    navigate(path)
  }

  useEffect(() => {
    setSelectedKeys([pathname])
    setOpenkeys(collapsed ? [] : ['/' + pathname.split('/')[1]])
  }, [collapsed, pathname])

  return (
    <Menu
      mode="inline"
      theme="light"
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={keys => {
        const tail = (keys as Array<any>).pop()
        setOpenkeys(tail)
      }}
    >
      {menuList?.map(menu =>
        menu.children ? (
          <SubMenu key={menu.path} title={getTitie(menu)}>
            {menu.children.map(child => (
              <Item key={child.path} onClick={() => onMenuClick(child)}>
                {child.label}
              </Item>
            ))}
          </SubMenu>
        ) : (
          <Item key={menu.path} onClick={() => onMenuClick(menu)}>
            {getTitie(menu)}
          </Item>
        )
      )}
    </Menu>
  )
}
