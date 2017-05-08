import { combineReducers } from 'redux';
import conferences from './conferences';

const rootReducer = combineReducers({
  conferences,
});

export default rootReducer;
