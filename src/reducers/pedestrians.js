const initialState = {
};
export default (state = initialState, action) => {
  switch (action.type) {
    case '[PEDESTRIANS]:SET':
      return action.payload;

    default:
      return state;
  }
};
