interface MenuItem {
  name: string
  label: string
  icon?: string //子菜单不需要图标
  key: string
  path: string
  children?: MenuItem[]
}

export type MenuChild = Omit<MenuItem, 'children'>

export type MenuList = MenuItem[]
