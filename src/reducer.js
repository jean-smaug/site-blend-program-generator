import { combineReducers } from 'redux';
import formReducer from './app/blender/blender.reducer';
import smoothieReducer from './app/smoothie/smoothie.reducer';
import pageReducer from './app/app.reducer';

const allReducers = combineReducers({
  form: formReducer,
  smoothie: smoothieReducer,
  page: pageReducer
});

export default allReducers;
