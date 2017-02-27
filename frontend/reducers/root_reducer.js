// Redux
import { combineReducers } from 'redux';
// Reducers
import SessionReducer from './session_reducer';
import KanaReducer from './kana_reducer';
import DeckReducer from './deck_reducer';
import QueryReducer from './query_reducer';
import PublicDeckReducer from './public_deck_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  decks: DeckReducer,
  kana: KanaReducer,
  query: QueryReducer
});

export default RootReducer;
