const getCategories = (currentPlayer, players) => {
  if (!(currentPlayer && players && players.length)) return [];

  const player = players.find(item => item.id === currentPlayer);

  return player ? player.availableCategories : [];
};

export default getCategories;
