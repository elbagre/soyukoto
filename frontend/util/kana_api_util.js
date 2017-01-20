import * as Action from '../actions/kana_actions';

export const fetchAllHiragana = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/hiraganas'
  });
}

export const fetchSingleHiragana = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/hiraganas/${id}`
  });
}

export const fetchAllKatakana = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/katakanas'
  });
}

export const fetchSingleKatakana = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/katakanas/${id}`
  });
}
