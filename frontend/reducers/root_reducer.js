// Redux
import { combineReducers } from 'redux';
// Reducers
import SessionReducer from './session_reducer';
import KanaReducer from './kana_reducer';
import DeckReducer from './deck_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  decks: DeckReducer,
  kana: KanaReducer
});

export default RootReducer;
