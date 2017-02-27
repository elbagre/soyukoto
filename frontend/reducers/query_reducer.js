import * as Action from '../actions/query_actions';

const defaultState = [];

const QueryReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case Action.RECEIVE_MATCHES:
      return action.matches;
    case Action.CLEAR_MATCHES:
      return [];
    default:
      return state;
  }
}

export default QueryReducer;
