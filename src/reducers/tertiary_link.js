const initalState = [];
export default function (state = initalState, action) {
  switch (action.type) {
    case '[TERTIARY_LINK]:SET':
      return action.payload;
    default:
      return state;
  }
}
