import { combineReducers } from '@reduxjs/toolkit'

import global from './globalSlice'
import user from './userSlice'

const rootReducer = combineReducers({
  global,
  user,
})

export default rootReducer
