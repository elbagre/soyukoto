import * as Util from '../util/hiragana_api_util';

export const REQUEST_ALL_HIRAGANA = "REQUEST_ALL_HIRAGANA";
export const RECEIVE_ALL_HIRAGANA = "RECEIVE_ALL_HIRAGANA";
export const REQUEST_SINGLE_HIRAGANA = "RECEIVE_SINGLE_HIRAGANA";
export const RECEIVE_SINGLE_HIRAGANA = "RECEIVE_SINGLE_HIRAGANA";

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
