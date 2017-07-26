import { combineReducers } from 'redux';
import formReducer from './formReducer'
import smoothieReducer from './smoothieReducer'

const allReducers = combineReducers({
  form : formReducer,
  smoothie: smoothieReducer,
});

export default allReducers;
