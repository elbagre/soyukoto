export const REQUEST_MATCHES = "REQUEST_MATCHES";
export const RECEIVE_MATCHES = "RECEIVE_MATCHES";

export const requestMatches = (query) => ({
  type: REQUEST_MATCHES,
  query
});

export const receiveMatches = (matches) => ({
  type: RECEIVE_MATCHES,
  matches
})
