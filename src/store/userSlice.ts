import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LoginParams, Role } from 'interface/user/login'
import { MenuChild } from 'interface/layout/menu.interface'
import { AppThunk } from 'store'
import { apiLogin, apiLogout } from 'api/user.api'

export interface UserState {
  username?: string

  menuList: MenuChild[]

  logged: boolean

  role: Role
}

const userState: UserState = {
  logged: localStorage.getItem('t') ? true : false,
  menuList: [],
  username: localStorage.getItem('username') || '',
  role: (localStorage.getItem('username') || '') as Role
}

const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  // case reducers
  reducers: {
    setUserItem: (state, actions: PayloadAction<Pick<UserState, 'username' | 'logged'>>) => {
      const { username, logged } = actions.payload
      if (username !== state.username) {
        localStorage.setItem('username', actions.payload.username || '')
      }
      state.username = username
      logged && (state.logged = logged)
    }
  }
})

export const { setUserItem } = userSlice.actions

export default userSlice.reducer

export const selectUser = (state: { user: UserState }) => state.user

export const loginAsync = (payload: LoginParams): AppThunk => async dispatch => {
  const { data, success } = await apiLogin(payload)
  console.log('data: ', data)

  if (success) {
    localStorage.setItem('t', data.token)
    localStorage.setItem('username', data.username)
    dispatch(
      setUserItem({
        logged: true,
        username: data.username
      })
    )
    return true
  }
  return false
}

export const logoutAsync = (): AppThunk => async dispatch => {
  const { success } = await apiLogout({ token: localStorage.getItem('t')! })
  // 根据具体业务而定
  if (success) {
    localStorage.clear()
    dispatch(
      setUserItem({
        logged: false
      })
    )
    return true
  }
  return false
}
