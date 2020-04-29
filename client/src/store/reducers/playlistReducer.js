
const initState = {
  searching: '',
  triggerSearch: '',
  movies: [],
  soundtracks: [],
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

  }
  return state
}

export default playlistReducer
