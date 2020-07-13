import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface GlobalState {
  collapsed: boolean

  noticeCount: number

  newUser: boolean
}

const initialState: GlobalState = {
  collapsed: false,
  noticeCount: 0,
  newUser: JSON.parse(localStorage.getItem('newUser')!) ?? true
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setGlobalCollapsed: (state, { payload }: PayloadAction<Pick<GlobalState, 'collapsed'>>) => {
      state.collapsed = payload.collapsed
    },
    setNoticeCount: (state, { payload }: PayloadAction<Pick<GlobalState, 'noticeCount'>>) => {
      state.noticeCount = payload.noticeCount
    }
  }
})

export const { setGlobalCollapsed, setNoticeCount } = globalSlice.actions
export const selectGlobal = (state: { global: GlobalState }) => state.global
export default globalSlice.reducer
