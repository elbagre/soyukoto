// Redux
import { combineReducers } from 'redux';
// Reducers
import SessionReducer from './session_reducer';
import HiraganaReducer from './hiragana_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  hiragana: HiraganaReducer
});

export default RootReducer;
