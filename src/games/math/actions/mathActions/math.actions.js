import { createActions } from 'redux-actions';

export const mathActions = {
  CHANGE_USER_INPUT: 'CHANGE_USER_INPUT',
  CHECK_LEVEL: 'CHECK_LEVEL',
  CHECK_SOLUTION: 'CHECK_SOLUTION',
  CLEAR_USER_INPUT: 'CLEAR_USER_INPUT',
  FINISH_GAME: 'FINISH_GAME',
  FINISH_SESSION: 'FINISH_SESSION',
  GENERATE_DIGITS: 'GENERATE_DIGITS',
  GET_TOTAL: 'GET_TOTAL',
  HANDLE_SCORE: 'HANDLE_SCORE',
  RECORD_GAME: 'RECORD_GAME',
  RECORD_SESSION: 'RECORD_SESSION',
  REMOVE_USER_INPUT: 'REMOVE_USER_INPUT',
  RESET_SESSION: 'RESET_SESSION',
  SET_OPERATION: 'SET_OPERATION',
  START_GAME: 'START_GAME',
};

export const {
  changeUserInput,
  checkLevel,
  checkSolution,
  clearUserInput,
  finishGame,
  finishSession,
  generateDigits,
  getTotal,
  handleScore,
  recordGame,
  recordSession,
  removeUserInput,
  resetSession,
  setOperation,
  startGame,
} = createActions(...Object.values(mathActions));
