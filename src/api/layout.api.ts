import { get } from 'utils/request'

import { MenuList } from 'interface/layout/menu.interface'
import { Notice } from 'interface/layout/notice.interface'

export const getMenuList = () => get<MenuList>('/user/menu', {})

export const getNoticeList = () => get<Notice[]>('/user/notice', {})
