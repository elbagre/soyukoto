import * as Util from '../util/card_api_util';
import { receiveDeck } from './deck_actions';

export const CREATE_CARD = "CREATE_CARD";
export const DESTROY_CARD = "DESTROY_CARD";

export const createCard = (card) => (dispatch) => {
  Util.createCard(card).then((deck) => dispatch(receiveDeck(deck)));
}

export const destroyCard = (id) => (dispatch) => {
  Util.destroyCard(id).then((deck) => dispatch(receiveDeck(deck)));
}
