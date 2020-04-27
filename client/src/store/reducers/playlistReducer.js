
const initState = {
  items: [],
  movies: [],
  soundtracks: []
}

const playlistReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      console.log('Added movies', action.movie)
    case 'ADD_ITEM':
      console.log('Added item', action.item)
  }
  return state
}

export default playlistReducer
