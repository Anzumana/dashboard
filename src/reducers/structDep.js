const initialState = {
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STRUCTDEP':
      return action.payload;

    default:
      return state;
  }
};
