const initalState = [];
export default function (state = initalState, action) {
  switch (action.type) {
    case '[SECONDARY]:SET':
      return action.payload;
    default:
      return state;
  }
}
