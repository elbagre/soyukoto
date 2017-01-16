// Redux
import { combineReducers } from 'redux';
// Reducers
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  session: SessionReducer
});

export default RootReducer;
