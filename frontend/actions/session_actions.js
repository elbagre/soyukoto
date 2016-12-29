export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";

export const login = (user) => ({
  action: LOGIN,
  user
});

export const signup = (user) => ({
  action: SIGNUP,
  user
});

export const logout = () => ({
  action: LOGOUT
});
