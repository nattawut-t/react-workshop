const LOADING = 'LOADING'

// action creators
export const loading = (loading = false) => ({ type: LOADING, loading })

// epic

const notification = (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.loading,
      }

    default:
      return state
  }
}

export default notification
