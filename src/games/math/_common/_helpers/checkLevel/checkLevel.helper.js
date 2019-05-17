export default state => {
  const isNextLevel = state.scoreToNextLevel <= state.score;
  return isNextLevel ? state.level + 1 : state.level;
};
