export default  (state = [], action) => {
  if (action.type == 'ADD_MESSAGE') {
    state.push(action.message);
  }

  return state;
}
