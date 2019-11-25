const initalState = null;
export default (state = initalState, action) => {
  switch (action.type) {
    case 'SELECT_EVENT':
      if (!action.payload) {
        return initalState;
      }
      return { ...action.payload };


    case 'UNSELECT_EVENT':
      return initalState;
    default:
      return state;
  }
};
