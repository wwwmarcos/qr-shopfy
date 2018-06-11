const initialState = {
  user: {},
  error: null
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case 'FACEBOOK_RESPONSE': {
      console.log('action.payload.user', action.payload.user)
      return {
        ...state,
        user: action.payload.user
      }
    }

    default:
      return state
  }
}
