import { request } from '../utils/request'
import { AxiosRequestConfig } from 'axios'

import { MenuList } from '../interface/layout/menu.interface'
import { Notice } from 'interface/layout/notice.interface'

export const getMenuList = (config: AxiosRequestConfig = {}) => request<MenuList>('get', '/user/menu', {}, config)

export const getNoticeList = (config: AxiosRequestConfig = {}) => request<Notice[]>('get', '/user/notice', {}, config)
