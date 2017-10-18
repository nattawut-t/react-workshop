import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs/Observable'
import { loading } from './notification'

const LOADING = 'LOADING'
const FETCH_USER = 'FETCH_USER'
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED'
const FETCH_USER_CANCELLED = 'FETCH_USER_CANCELLED'

// action creators
// export const loading = (loading = false) => ({ type: LOADING, loading })
export const fetchUser = username => ({ type: FETCH_USER, payload: username })
export const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload })
export const fetchUserCancelled = () => ({ type: FETCH_USER_CANCELLED })

// epic
export const fetchUserEpic = action$ =>
  action$.ofType(FETCH_USER)
    .mergeMap(action =>

      ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .delay(2000)
        .map(response => fetchUserFulfilled(response))
        .takeUntil(action$.ofType(FETCH_USER_CANCELLED))
        .startWith(loading(true))

    )

const users = (state = {}, action) => {
  switch (action.type) {

    // case LOADING:
    //   return {
    //     ...state,
    //     loading: action.loading,
    //   }

    case FETCH_USER_FULFILLED:
      console.log(FETCH_USER_FULFILLED, action)
      return {
        ...state,
        // `login` is the username
        payload: JSON.stringify(action.payload),
        // loading: false,
      }

    default:
      return state
  }
}

export default users
