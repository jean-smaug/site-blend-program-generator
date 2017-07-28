import { combineReducers } from 'redux';
import formReducer from './app/Blender/formReducer';
import smoothieReducer from './app/smoothie/smoothie.reducer';

const allReducers = combineReducers({
  form: formReducer,
  smoothie: smoothieReducer,
});

export default allReducers;
