import { mock, intercepter } from '../config'
import { Role } from 'interface/permission/role.interface'

const roles: Role[] = [
  {
    name: '访客',
    code: 'role_guest',
    id: 0,
    status: 'enabled'
  },
  {
    name: '管理员',
    code: 'role_admin',
    id: 1,
    status: 'enabled'
  }
]

mock.mock('/permission/role', 'get', intercepter(roles))
