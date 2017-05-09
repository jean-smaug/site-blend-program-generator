
export const choixType = (id, checked) => {
  return {
    type: 'SELECT_TYPE',
    payload: {
      id,
      checked,
    },
  };
};

export const choixLevel = (id, choix) => {
  return {
    type: 'SELECT_LEVEL',
    payload: {
      id,
      choix,
    },
  };
};

export const choixMotClef = (id, checked) => {
  return {
    type: 'SELECT_MOT_CLEF',
    payload: {
      id,
      checked,
    },
  };
};

