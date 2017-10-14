import { ajax } from 'rxjs/observable/dom/ajax'

const FETCH_USER = 'FETCH_USER'
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED'

// action creators
export const fetchUser = username => ({ type: FETCH_USER, payload: username })
export const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload })

// epic
export const fetchUserEpic = action$ =>
  action$.ofType(FETCH_USER)
    .mergeMap(action => {
      console.log(action)
      return ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .map(response => fetchUserFulfilled(response))
    })

const users = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_FULFILLED:
      console.log(FETCH_USER_FULFILLED, action)
      return {
        ...state,
        // `login` is the username
        payload: JSON.stringify(action.payload),
      }

    default:
      return state
  }
}

export default users
