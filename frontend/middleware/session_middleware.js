import * as API from '../util/session_api_util.js';
import * as Action from '../actions/session_actions.js';
import { hashHistory } from 'react-router';

const SessionMiddleware = ({getState, dispatch}) => (next) => (action) => {
  const success = (user) => {
    dispatch(Session.requestCurrentUser(user));
    hashHistory.push('/home');
  };

  const failure = (errors) => dispatch(Session.receiveErrors(errors));

  switch(action.type) {
    case Session.LOGIN:
      API.login(action.user, success, failure);
      break;
    case Session.LOGOUT:
      API.logout(() => hashHistory.push('/entry'), failure);
      break;
    case Session.SIGNUP:
      API.signup(user, success, failure);
      break;
    default:
      next(action);
  }
};

export default SessionMiddleware;
