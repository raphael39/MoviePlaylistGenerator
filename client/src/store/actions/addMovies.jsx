export const addMovies = (movies) => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_MOVIES', movies })
  }
};
