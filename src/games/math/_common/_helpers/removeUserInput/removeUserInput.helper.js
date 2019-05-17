export default userInput => (
  userInput.length > 1
    ? userInput.slice(0, userInput.length - 1)
    : ''
);
