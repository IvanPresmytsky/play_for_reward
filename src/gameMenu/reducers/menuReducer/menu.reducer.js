import { handleActions } from 'redux-actions';
import { gameMenuActions } from '../../actions/gameMenuActions';

export const initialState = {
  currentCategory: null,
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

export default handleActions(
  {
    [gameMenuActions.GET_AVAILABLE_CATEGORIES]: (state, action) => ({
      ...state,
      categories: action.payload,
    }),
    [gameMenuActions.GET_AVAILABLE_GAMES]: (state, action) => ({
      ...state,
      games: action.payload,
    }),
    [gameMenuActions.GET_CURRENT_CATEGORY]: (state, action) => ({
      ...state,
      currentCategory: action.payload,
    }),
  },
  initialState,
);
