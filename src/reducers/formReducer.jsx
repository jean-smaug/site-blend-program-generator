import _ from 'lodash';

const initialState = {
  keywords: [],
  domains: [],
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
    case 'ADD_DOMAIN' :
      return {
        ...state,
        domains: [...state.domains, action.data.domain],
      };
    case 'REMOVE_DOMAIN' :
      return {
        ...state,
        domains: _.filter(
          state.domains, element => element.domain !== action.data.domain.domain,
        ),
      };
    case 'UPDATE_LEVEL_DOMAIN' :
      return {
        ...state,
        domains: _.map(state.domains, (element) => {
          if (element.domain === action.data.domain.domain) {
            return { ...element, level: action.data.domain.level };
          }
          return element;
        }),
      };
    default:
      return state;
  }
};

export default formReducer;
