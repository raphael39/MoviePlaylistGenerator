
const initState = {
  searching: '',
  movies: [],
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

  }
  return state
}

export default playlistReducer
