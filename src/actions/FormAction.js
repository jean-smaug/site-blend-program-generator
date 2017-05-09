
export const choixType = (id, checked) => {
  return {
    type: 'SELECT_TYPE',
    payload: {
      id,
      checked,
    },
  };
}

export const choixLevel = (id, choix) => {
  return {
    type: 'SELECT_LEVEL',
    payload: {
      id,
      choix,
    },
  };
}

