import * as Util from '../util/kana_api_util';

export const REQUEST_ALL_HIRAGANA = "REQUEST_ALL_HIRAGANA";
export const RECEIVE_ALL_HIRAGANA = "RECEIVE_ALL_HIRAGANA";
export const REQUEST_SINGLE_HIRAGANA = "RECEIVE_SINGLE_HIRAGANA";
export const RECEIVE_SINGLE_HIRAGANA = "RECEIVE_SINGLE_HIRAGANA";
export const REQUEST_ALL_KATAKANA = "REQUEST_ALL_KATAKANA";
export const RECEIVE_ALL_KATAKANA = "RECEIVE_ALL_KATAKANA";
export const REQUEST_SINGLE_KATAKANA = "RECEIVE_SINGLE_KATAKANA";
export const RECEIVE_SINGLE_KATAKANA = "RECEIVE_SINGLE_KATAKANA";

export const requestAllHiragana = () => (dispatch) => {
  Util.fetchAllHiragana()
      .then( (hiraganas) => dispatch(receiveAllHiragana(hiraganas)));
}

export const requestSingleHiragana = (id) => {
  Util.fetchSingleHiragana(id)
      .then( (hiragana) => dispatch(receiveSingleHiragana(hiragana)));
}

export const receiveAllHiragana = (hiraganas) => ({
  type: RECEIVE_ALL_HIRAGANA,
  hiraganas
});

export const receiveSingleHiragana = (hiragana) => ({
  type: RECEIVE_SINGLE_HIRAGANA,
  hiragana
});

export const requestAllKatakana = () => (dispatch) => {
  Util.fetchAllKatakana()
      .then( (katakanas) => dispatch(receiveAllKatakana(katakanas)));
}

export const requestSingleKatakana = (id) => {
  Util.fetchSingleKatakana(id)
      .then( (katakana) => dispatch(receiveSingleKatakana(katakana)));
}

export const receiveAllKatakana = (katakanas) => ({
  type: RECEIVE_ALL_KATAKANA,
  katakanas
});

export const receiveSingleKatakana = (katakana) => ({
  type: RECEIVE_SINGLE_KATAKANA,
  katakana
});
