export const mathActions = {
  HANDLE_SCORE: 'HANDLE_SCORE',
  CHECK_SOLUTION: 'CHECK_SOLUTION',
  GENERATE_DIGITS: 'GENERATE_DIGITS',
  GET_TOTAL: 'GET_TOTAL',
  START_GAME: 'START_GAME',
  CHANGE_USER_INPUT: 'CHANGE_INPUT',
  REMOVE_USER_INPUT: 'REMOVE_USER_INPUT',
  CHECK_LEVEL: 'CHECK_LEVEL',
  CLEAR_USER_INPUT: 'CLEAR_USER_INPUT',
  FINISH_GAME: 'FINISH_GAME',
  FINISH_SESSION: 'FINISH_SESSION',
  RECORD_GAME: 'RECORD_GAME',
  RECORD_SESSION: 'RECORD_SESSION',
  RESET_SESSION: 'RESET_SESSION',
};

export const generateDigits = () => ({
  type: mathActions.GENERATE_DIGITS,
});

export const checkSolution = solution => ({
  type: mathActions.CHECK_SOLUTION,
  solution,
});

export const getTotal = () => ({
  type: mathActions.GET_TOTAL,
});

export const handleScore = () => ({
  type: mathActions.HANDLE_SCORE,
});

export const startGame = () => ({
  type: mathActions.START_GAME,
});

export const changeUserInput = userInput => ({
  type: mathActions.CHANGE_USER_INPUT,
  userInput,
});

export const removeUserInput = () => ({
  type: mathActions.REMOVE_USER_INPUT,
});

export const clearUserInput = () => ({
  type: mathActions.CLEAR_USER_INPUT,
});

export const finishGame = () => ({
  type: mathActions.FINISH_GAME,
});

export const recordSession = () => ({
  type: mathActions.RECORD_SESSION,
});

export const recordGame = (category, game) => ({
  type: mathActions.RECORD_GAME,
  category,
  game,
});

export const checkLevel = () => ({
  type: mathActions.CHECK_LEVEL,
});

export const resetSession = () => ({
  type: mathActions.RESET_SESSION,
});

export const finishSession = sessionData => ({
  type: mathActions.FINISH_SESSION,
  sessionData,
});
