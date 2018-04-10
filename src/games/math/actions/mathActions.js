export const mathActions = {
  ADD_SCORE: 'ADD_SCORE',
  CHECK_SOLUTION: 'CHECK_SOLUTION',
  GENERATE_DIGITS: 'GENERATE_DIGITS',
  GET_TOTAL: 'GET_TOTAL',
  REMOVE_SCORE: 'REMOVE_SCORE',
  START_GAME: 'START_GAME',
  CHANGE_INPUT: 'CHANGE_INPUT',
  REMOVE_USER_INPUT: 'REMOVE_USER_INPUT',
  CLEAR_USER_INPUT: 'CLEAR_USER_INPUT',
};

export const generateDigits = () => ({
  type: mathActions.GENERATE_DIGITS
});

export const checkSolution = (solution) => ({
  type: mathActions.CHECK_SOLUTION,
  solution,
});

export const getTotal = () => ({
  type: mathActions.GET_TOTAL,
});

export const addScore = () => ({
  type: mathActions.ADD_SCORE,
});

export const removeScore = () => ({
  type: mathActions.REMOVE_SCORE,
});

export const startGame = () => ({
  type: mathActions.START_GAME,
});

export const changeInput = (userInput) => ({
  type: mathActions.CHANGE_INPUT,
  userInput
});

export const removeUserInput = () => ({
  type: mathActions.REMOVE_USER_INPUT,
});

export const clearUserInput = () => ({
  type: mathActions.CLEAR_USER_INPUT,
});