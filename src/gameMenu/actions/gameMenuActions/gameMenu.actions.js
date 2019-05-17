import { createActions } from 'redux-actions';

export const gameMenuActions = {
  GET_AVAILABLE_CATEGORIES: 'GET_AVAILABLE_CATEGORIES',
  GET_AVAILABLE_GAMES: 'GET_AVAILABLE_GAMES',
};

export const {
  getAvailableCategories,
  getAvailableGames,
} = createActions(...Object.values(gameMenuActions));
