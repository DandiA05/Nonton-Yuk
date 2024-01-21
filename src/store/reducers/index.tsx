// index.js pada page reducers
import { combineReducers } from '@reduxjs/toolkit'
import dataCount from './dataCount'
import dataWatchList from './dataWatchList'

const rootReducer = combineReducers({
  dataCount,
  dataWatchList,
})
export default rootReducer
