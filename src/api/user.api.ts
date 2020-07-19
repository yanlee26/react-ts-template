import { post } from 'utils/request'
import { LoginResult, LoginParams, LogoutParams, LogoutResult } from 'interface/user/login'

export const apiLogin = (data: LoginParams) => post<LoginResult>('/user/login', data)

export const apiLogout = (data: LogoutParams) => post<LogoutResult>('/user/logout', data)
