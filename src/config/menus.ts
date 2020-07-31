import { MenuList } from 'interface/layout/menu.interface'

export const menuList: MenuList = [
  {
    name: 'dashboard',
    label: '首页',
    icon: 'dashboard',
    key: '0',
    path: '/dashboard'
  },
  {
    name: 'documentation',
    label: '文档',
    icon: 'documentation',
    key: '1',
    path: '/documentation'
  },
  {
    name: 'permission',
    label: '权限',
    icon: 'permission',
    key: '2',
    path: '/permission',
    children: [
      {
        name: 'buttonPermission',
        label: '权限配置',
        key: '2-1',
        path: '/permission/config'
      },
      {
        name: 'notFound',
        label: '404',
        key: '2-2',
        path: '/permission/404'
      }
    ]
  },
  {
    name: 'account',
    label: '个人设置',
    icon: 'account',
    key: '3',
    path: '/account'
  }
]
