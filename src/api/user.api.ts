import { request } from '../utils/request'
import { LoginResult, LoginParams, LogoutParams, LogoutResult } from '../interface/user/login'

export const apiLogin = (data: LoginParams) => request<LoginResult>('post', '/user/login', data)

export const apiLogout = (data: LogoutParams) => request<LogoutResult>('post', '/user/logout', data)
