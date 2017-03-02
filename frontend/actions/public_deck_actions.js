import * as Util from '../util/public_deck_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_PUBLIC_DECKS = "RECEIVE_PUBLIC_DECKS";
export const RECEIVE_PUBLIC_DECK = "RECEIVE_PUBLIC_DECK";

export const requestPublicDecks = () => (dispatch) => {
  Util.fetchPublicDecks()
      .then( (decks) => dispatch(receivePublicDecks(decks)));
};

export const requestPublicDeck = (id) => (dispatch) => {
  Util.fetchPublicDeck(id)
      .then( (deck) => dispatch(receivePublicDeck(deck)));
};

export const receivePublicDecks = (decks) => ({
  type: RECEIVE_PUBLIC_DECKS,
  decks
});

export const receivePublicDeck = (deck) => ({
  type: RECEIVE_PUBLIC_DECK,
  deck
});

export const createPublicDeck = (deck) => (dispatch) => {
  Util.createPublicDeck(deck)
      .then( (publicDeck) => {
        dispatch(receivePublicDeck(publicDeck));
        hashHistory.push(`/public/${publicDeck.id}`);
      });
}

export const destroyPublicDeck = (id) => (dispatch) => {
  Util.destroyPublicDeck(id)
      .then( (decks) => receivePublicDecks(decks));
};
