
export const addKeyword = (word) => {
  return {
    type: 'ADD_KEYWORD',
    data: {
      word: word
    }
  }
}
