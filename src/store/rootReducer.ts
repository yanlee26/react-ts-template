import { combineReducers } from '@reduxjs/toolkit'

import tagView from 'pages/layout/tagView/tagViewSlice'
import global from './globalSlice'
import user from './userSlice'

const rootReducer = combineReducers({
  global,
  user,
  tagView
})

export default rootReducer
