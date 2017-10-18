import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import users, { fetchUserEpic } from './users'
import notification from './notification'

export const rootEpic = combineEpics(
  fetchUserEpic,
)

export const rootReducer = combineReducers({
  users,
  notification,
})