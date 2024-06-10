const initalState = true;

const isVisibleReducer = (state = initalState, action) => {
  if(action.type === 'Change') {
    return !state;
  }
  else {
    return state;
  }
}

export default isVisibleReducer;