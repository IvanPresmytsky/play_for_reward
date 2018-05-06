import { menuActions } from '../actions/menuActions';

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
  currentCategory: {
    id: 'math',
    games: ['addition', 'subtraction'],
    name: 'math',
    description: 'math games',
  },
  currentGame: null,
};

export function getItemById(list, id) {
  return list.find(item => item.id === id);
}

export function menuReducer(state = initialState, action) {
  switch (action.type) {
    case menuActions.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currrentCategory: getItemById(state.categories, action.categoryId),
      };
    case menuActions.SET_CURRENT_GAME:
      return {
        ...state,
        currentGame: getItemById(state.games, action.gameId),
      };
    default:
      return state;
  }
}

export default menuReducer;
