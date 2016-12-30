export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export function login(user) {
  return (dispatch) => {
    return API.login(user)
      .then(user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export function signup(user) {
  return (dispatch) => {
    return API.signup(user)
      .then(user => dispatch(receiveCurrentUser(user)),
            err => dispatch(receiveErrors(err.responseJSON)));
  };
}

export function logout() {
  return (dispatch) => {
    return API.logout().then(user => dispatch(receiveCurrentUser(null)));
  };
}

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
