const initialState = {
};
export default (state = initialState, action) => {
  switch (action.type) {
    case '[CAR]:SET':
      return action.payload;

    default:
      return state;
  }
};
