const initalState = [];
export default function (state = initalState, action) {
  switch (action.type) {
    case '[TRUNK]:SET':
      return action.payload;
    default:
      return state;
  }
}
