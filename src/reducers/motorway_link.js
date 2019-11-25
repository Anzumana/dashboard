const initalState = [];
export default function (state = initalState, action) {
  switch (action.type) {
    case '[MOTORWAY_LINK]:SET':
      return action.payload;
    default:
      return state;
  }
}
