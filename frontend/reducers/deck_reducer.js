import * as Action from '../actions/deck_actions';
import merge from 'lodash/merge'

const defaultState = {
  index: [],
  detail: null
}

const DeckReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case Action.RECEIVE_ALL_DECKS:
      return merge({}, { index: action.decks }, state);
    case Action.RECEIVE_DECK:
      return merge({}, { detail: action.deck}, state);
    default:
      return state;
  }
}

export default DeckReducer;
