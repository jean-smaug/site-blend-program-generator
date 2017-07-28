import { combineReducers } from 'redux';
import formReducer from './components/Blender/formReducer';
import smoothieReducer from './components/Smoothie/smoothieReducer';

const allReducers = combineReducers({
  form: formReducer,
  smoothie: smoothieReducer,
});

export default allReducers;
