export const addToken = (token) => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_Token', token})
  }
};
