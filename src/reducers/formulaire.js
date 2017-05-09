
const initialState = {
  conferenceTypes: [
    { key: 'tech', name: 'Techno', selected: false, level: 'beginner' },
    { key: 'blend', name: 'Blend', selected: false, level: 'beginner' },
    { key: 'market', name: 'Marketing', selected: false, level: 'beginner' },
    { key: 'design', name: 'Design', selected: false, level: 'beginner' },
  ],
  motsClefs: [
    { name: 'Php', selected: false },
    { name: 'Javascript', selected: false },
    { name: 'React', selected: false },
    { name: 'Prestashop', selected: false },
  ],
};

export default function formulaire(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_TYPE':
      return {
        ...state,
        conferenceTypes: state.conferenceTypes.map(
          (conf, index) => ((index === action.payload.id) ?
            { ...conf, selected: action.payload.checked }
            : conf)),
      };
    case 'SELECT_LEVEL':
      return {
        ...state,
        conferenceTypes: state.conferenceTypes.map(
          (conf, index) => ((index === action.payload.id) ?
            { ...conf, level: action.payload.choix }
            : conf)),
      };
    case 'SELECT_MOT_CLEF':
      return {
        ...state,
        motsClefs: state.motsClefs.map(
          (mot, index) => ((index === action.payload.id) ?
            { ...mot, selected: action.payload.checked }
            : mot)),
      };
    default:
      return state;
  }
}
