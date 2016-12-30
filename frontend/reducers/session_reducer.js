import * as Session from '../actions/session_actions.js';
import { merge } from 'lodash';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (initialState = defaultState, action) => {
  switch(action.type) {
    case Session.RECEIVE_CURRENT_USER:
      return merge({}, initialState, { currentUser: action.currentUser });
    case Session.RECEIVE_ERRORS:
      return merge({}, initialState, { errors: action.errors});
    default:
      return initialState;
  }
};

export default SessionReducer;
