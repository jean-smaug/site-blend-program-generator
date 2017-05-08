
const initialState = {
  conferenceTypes: [
      { key: 'tech', name: 'Techo' },
      { key: 'blend', name: 'Blend' },
      { key: 'market', name: 'Marketing' },
      { key: 'design', name: 'Design' },
  ],
};

export default function conferences(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_TYPE':
      return { conferenceTypes: state.conferenceTypes.splice(action.choix, 1), ...state };
    default:
      return state;
  }
}
