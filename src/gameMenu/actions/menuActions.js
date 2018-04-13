export const menuActions = {
  SET_CURRENT_CATEGORY: 'SET_CURRENT_CATEGORY',
  SET_CURRENT_GAME: 'SET_CURRENT_GAME',
};
  
export const setCurrentCategory = (category) => ({
  type: menuActions.SET_CURRENT_CATEGORY,
  category,
});
  
export const setCurrentGame = (game) => ({
  type: menuActions.SET_CURRENT_GAME,
  game,
});
