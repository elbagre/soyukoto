import * as Action from '../actions/kana_actions'
import merge from 'lodash/merge'

const defaultState = {
  hiragana: {
    normalGroupings: [],
    variantGroupings: [],
    kana: [],
    answers: []
  },
  katakana: {
    normalGroupings: [],
    variantGroupings: [],
    kana: [],
    answers: []
  }
}

const KanaReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case Action.RECEIVE_ALL_HIRAGANA:
      return merge({}, state, { hiragana: action.hiraganas });
    case Action.RECEIVE_ALL_KATAKANA:
      return merge({}, state, { katakana: action.katakanas });
    default:
      return state;
  }
}

export default KanaReducer;
