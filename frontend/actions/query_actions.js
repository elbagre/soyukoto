import * as Util from '../util/query_api_util';

export const REQUEST_MATCHES = "REQUEST_MATCHES";
export const RECEIVE_MATCHES = "RECEIVE_MATCHES";
export const CLEAR_MATCHES = "CLEAR_MATCHES"

export const clearMatches = () => ({
  type: CLEAR_MATCHES,
});

export const requestMatches = (query) => (dispatch) => {
  if (query.length) {
    Util.requestMatches(query)
    .then( (matches) => dispatch(receiveMatches(matches)));
  } else {
    dispatch(clearMatches());
  }
}

export const receiveMatches = (matches) => ({
  type: RECEIVE_MATCHES,
  matches
});
