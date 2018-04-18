export const menuActions = {
  SET_CURRENT_CATEGORY: 'SET_CURRENT_CATEGORY',
  SET_CURRENT_GAME: 'SET_CURRENT_GAME',
};

export const setCurrentCategory = categoryId => ({
  type: menuActions.SET_CURRENT_CATEGORY,
  categoryId,
});

export const setCurrentGame = gameId => ({
  type: menuActions.SET_CURRENT_GAME,
  gameId,
});
