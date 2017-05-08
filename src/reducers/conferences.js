
const initialState = {
  conferenceTypes: [
      { key: 'tech', name: 'Techno' },
      { key: 'blend', name: 'Blend' },
      { key: 'market', name: 'Marketing' },
      { key: 'design', name: 'Design' },
  ],
};

export default function conferences(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_TYPE':
      return {
        ...state,
        conferenceTypes: state.conferenceTypes.filter(element => element.key !== action.payload),
      };
    default:
      return state;
  }
}
