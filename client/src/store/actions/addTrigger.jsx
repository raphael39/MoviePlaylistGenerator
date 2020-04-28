export const addTriggerSearch = (trigger) => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_TRIGGER', trigger})
  }
};
