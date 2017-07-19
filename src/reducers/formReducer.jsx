
const initialState = {
  keywords : ["js"],
  themes: []
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_KEYWORD' :
      return {
        ...state,
        keywords : [...state.keywords, action.data.word]
      };
    case 'REMOVE_KEYWORD' :
      return {
        ...state,
        keywords :  state.keywords.filter((element) => element !== action.data.word)
      };
    case 'ADD_THEME' :
      return {
        ...state,
        themes : [...state.themes, action.data.theme]
      };
    case 'REMOVE_THEME' :
      return {
        ...state,
        themes :  state.themes.filter((element) => element.libelle !== action.data.theme.libelle)
      };
    case 'UPDATE_LEVEL_THEME' :
      return {
        ...state,
        themes :  state.themes.map(function(element) {
          if(element.libelle === action.data.theme.libelle) element.level = action.data.theme.level
          return element;
        })
      };
    default:
      return state
  }
};

export default formReducer
