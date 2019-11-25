const initialState = {
  since: new Date(2017, 10, 12, 0).toISOString(),
  until: new Date(2017, 10, 12, 24).toISOString(),
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload;

    case 'RESET_FILTER':
      return initialState;

    default:
      return state;
  }
};
