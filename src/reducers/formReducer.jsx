import _ from 'lodash';

const initialState = {
  keywords: ['js'],
  themes: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_KEYWORD':
      return {
        ...state,
        keywords: [...state.keywords, action.data.word],
      };
    case 'REMOVE_KEYWORD':
      return {
        ...state,
        keywords: _.filter(
          state.keywords,
          element => element !== action.data.word,
        ),
      };
    case 'ADD_THEME':
      return {
        ...state,
        themes: [...state.themes, action.data.theme],
      };
    case 'REMOVE_THEME':
      return {
        ...state,
        themes: _.filter(
          state.themes,
          element => element.libelle !== action.data.theme.libelle,
        ),
      };
    case 'UPDATE_LEVEL_THEME':
      return {
        ...state,
        themes: _.map(state.themes, (element) => {
          if (element.libelle === action.data.theme.libelle) {
            return { ...element, level: action.data.theme.level };
          }
          return element;
        }),
      };
    default:
      return state;
  }
};

export default formReducer;
