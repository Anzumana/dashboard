const initialState = null;
export default function (state = initialState, action) {
  switch (action.type) {
    case '[LAYER]:typically_affected_subgraph':
      return 'typically_affected_subgraph';
    case '[LAYER]:affected_subgraph':
      return 'affected_subgraph';
    case '[LAYER]:none':
      return 'none';
    default:
      return state;
  }
}
