
const initState = {
  items: {},
  movies: [],
  soundtracks: []
}

const playlistReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      state.movies = action.movies
      console.log('Added movies', action.movies)
    case 'ADD_ITEM':

      console.log('Added item', action.item, 3,state.items)
  }
  return state
}

export default playlistReducer
