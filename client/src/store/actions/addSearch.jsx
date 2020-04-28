export const addSearching = (searching) => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_SEARCHING', searching})
  }
};
