const pageReducer = (state = {page: 'blender'}, data) => {
  switch (data.type) {
    case 'CHANGE_PAGE':
      return { ...state, page: data.page };

    default:
      return state;
  }
};

export default pageReducer;
