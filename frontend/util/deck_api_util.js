import * as Action from '../actions/deck_actions';

export const createDeck = (deck) => {
  return $.ajax({
    method: 'POST',
    url: 'api/decks',
    data: { deck }
  })
}

export const destroyDeck = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/decks/${id}`
  })
}

export const fetchAllDecks = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/decks'
  });
}

export const fetchSingleDeck = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/decks/${id}`,
  })
}
