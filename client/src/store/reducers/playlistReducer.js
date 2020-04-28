
const initState = {
  items: {},
  movies: [],
  soundtracks: []
}

const playlistReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      console.log('Added movie', action.movies, 3,state.movies)
      return {
        ...state,
        movies: action.movies
      }
    case 'ADD_ITEM':
      console.log('Added item', action.item, 3,state.items)
      return {
        ...state,
        items: action.items
      }
  }
  return state
}

export default playlistReducer
