
const initState = {
  searching: '',
  triggerSearch: '',
  movies: [],
  soundtracks: [],
  token: ''
}

const playlistReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      return {
        ...state,
        movies: action.movies
      }
    case 'ADD_SEARCHING':
      return {
        ...state.searching,
        searching: action.searching,

      }
    case 'ADD_TRIGGER':
      console.log('Trigger: ', action.triggerSearch)
      return {
        ...state.triggerSearch,
        triggerSearch: action.triggerSearch

      }
    case 'ADD_TOKEN':
      console.log('Token: ', action.token)
      return {
        ...state,
        token: action.token

      }
  }
  return state
}

export default playlistReducer
