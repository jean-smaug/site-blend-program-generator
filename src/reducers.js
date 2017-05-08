import { combineReducers } from 'redux';


// on part de 0
const initialState = { counter: 0 };
const counter = (state = initialState, action) => {
  switch (action.type) {
    // selon l'action …
    case 'INCREMENT':
      // … on retourne un nouvel état incrémenté
      return { counter: state.counter + 1 };
    case "DECREMENT":
      // … ou décrémenté
      return { counter: state.counter - 1 };
    default:
      // ou l'état actuel, si l'on n'y touche pas
      return state;
  }
}

export default () => combineReducers({
  counter,
});
