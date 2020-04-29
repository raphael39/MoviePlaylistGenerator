const initState = {
  auth: 'something'
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TOKEN':
      console.log('added token: ', action.token)
      return {
        ...state,
        token: action.token

      }
  }
  return state
}

export default   authReducer
