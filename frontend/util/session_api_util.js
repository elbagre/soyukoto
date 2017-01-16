import * as Action from '../actions/session_actions'

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: { user }
  })
}

export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user }
  })
}

export const signout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
}
