import { gameMenuActions } from '../../actions/gameMenuActions';

export const initialState = {
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
  ],
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case gameMenuActions.GET_AVAILABLE_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case gameMenuActions.GET_AVAILABLE_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;

