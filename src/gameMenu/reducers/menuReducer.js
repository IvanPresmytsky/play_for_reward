const initialState = {
  categories: [
    {
      id: 'math',
      games: ['addition', 'subtraction'],
      name: 'math',
      description: 'math games',
    },
  ],
  games: [
    {
      category: 'math',
      id: 'addition',
      name: 'addition',
      description: 'add digits to get correct result',
    },
    {
      category: 'math',
      id: 'subtraction',
      name: 'subtraction',
      description: 'subtract digits to get correct result',
    },
  ],
};

export function menuReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default menuReducer;
