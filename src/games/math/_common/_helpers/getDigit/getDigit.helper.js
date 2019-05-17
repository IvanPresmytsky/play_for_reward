export default level => {
  const levelRatio = 2 + level;
  return Math.floor(Math.random() * levelRatio) + 1;
};
