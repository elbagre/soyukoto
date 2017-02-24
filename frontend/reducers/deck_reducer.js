import * as Action from '../actions/deck_actions';
import { hashHistory } from 'react-router';
import merge from 'lodash/merge'

const defaultState = {
  index: [],
  detail: null
}

const DeckReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case Action.RECEIVE_ALL_DECKS:
      return { index: action.decks, detail: state.detail };
    case Action.RECEIVE_DECK:
      return { index: state.index, detail: action.deck };
    default:
      return state;
  }
}

export default DeckReducer;
