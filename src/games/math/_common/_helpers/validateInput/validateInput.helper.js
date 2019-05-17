export default userInput => (
  userInput.length > 1 && userInput[0] === '0'
    ? userInput.slice(1, userInput.length)
    : userInput
);
