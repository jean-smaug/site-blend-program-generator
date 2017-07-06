import { combineReducers }  from 'redux'

import formReducer from './formReducer'

const allReducers = combineReducers({
  form : formReducer
})

export default allReducers
