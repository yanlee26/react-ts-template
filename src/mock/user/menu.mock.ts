import { mock, intercepter } from '../config'
import { menuList } from 'config/menus'

mock.mock('/user/menu', 'get', () => {
  return intercepter(menuList)
})
