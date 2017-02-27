import * as Action from '../actions/public_deck_actions';
import merge from 'lodash/merge';

const defaultState = {
  index: [],
  detail: { name: "", description: "", cards: [] }
}

const PublicDeckReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case Action.RECEIVE_PUBLIC_DECKS:
      return { index: action.decks, detail: state.detail };
    case Action.RECEIVE_PUBLIC_DECK:
      return { index: state.decks, detail: action.deck };
    default:
      return state;
  }
}

export default PublicDeckReducer;
