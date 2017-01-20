import * as Util from '../util/deck_api_util';

export const REQUEST_ALL_DECKS = "REQUEST_ALL_DECKS";
export const RECEIVE_ALL_DECKS = "RECEIVE_ALL_DECKS";
export const REQUEST_DECK = "REQUEST_DECK";
export const RECEIVE_DECK = "RECEIVE_DECK";
export const CREATE_DECK = "CREATE_DECK";
export const DESTROY_DECK = "DESTROY_DECK";

export  const requestAllDecks = () => (dispatch) => {
  Util.fetchAllDecks()
      .then( (decks) => dispatch(receiveAllDecks(decks)));
}

export const receiveAllDecks = (decks) => ({
  type: RECEIVE_ALL_DECKS,
  decks
});

export const requestDeck = (id) => (dispatch) => {
  Util.fetchSingleDeck(id)
      .then( (deck) => dispatch(receiveDeck(deck)));
}

export const receiveDeck = (deck) => ({
  type: RECEIVE_DECK,
  deck
});

export const createDeck = (deck) => (dispatch) => {
  Util.createDeck(deck)
      .then( () => dispatch(requestAllDecks()));
}

export const destroyDeck = (id) => (dispatch) => {
  Util.destroyDeck(id)
      .then( () => dispatch(requestAllDecks()));
}
