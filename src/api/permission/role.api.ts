import { get } from 'utils/request'
import { GetRoleResult } from 'interface/permission/role.interface'

/** get role list api */
export const apiGetRoleList = () => get<GetRoleResult>('/permission/role')
