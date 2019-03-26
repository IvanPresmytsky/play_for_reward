export const gameMenuActions = {
  GET_AVAILABLE_CATEGORIES: 'GET_AVAILABLE_CATEGORIES',
  GET_AVAILABLE_GAMES: 'GET_AVAILABLE_GAMES',
};

export const getAvailableCategories = payload => ({
  type: gameMenuActions.GET_AVAILABLE_CATEGORIES,
  payload,
});

export const getAvailableGames = payload => ({
  type: gameMenuActions.GET_AVAILABLE_GAMES,
  payload,
});

