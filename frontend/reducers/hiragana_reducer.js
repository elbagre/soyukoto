import * as Action from '../actions/hiragana_actions'
import merge from 'lodash/merge'

const defaultState = {
  normalGroupings: [],
  variantGroupings: [],
  kana: [],
  answers: []
}

const HiraganaReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case Action.RECEIVE_ALL_HIRAGANA:
      return merge({}, state, action.hiraganas);
    default:
      return state;
  }
}

export default HiraganaReducer;
