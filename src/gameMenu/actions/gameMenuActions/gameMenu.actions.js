import { createActions } from 'redux-actions';

export const gameMenuActions = {
  GET_AVAILABLE_CATEGORIES: 'GET_AVAILABLE_CATEGORIES',
  GET_AVAILABLE_GAMES: 'GET_AVAILABLE_GAMES',
  GET_CURRENT_CATEGORY: 'GET_CURRENT_CATEGORY',
};

export const {
  getAvailableCategories,
  getAvailableGames,
  getCurrentCategory,
} = createActions(...Object.values(gameMenuActions));
