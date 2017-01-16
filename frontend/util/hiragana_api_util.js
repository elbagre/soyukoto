import * as Action from '../actions/hiragana_actions';

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
