import { mathActions } from '../actions/mathActions';
import operations from '../common/constants/operations';

const initialState = {
  firstDigit: 0,
  isCorrectSolution: false,
  isGameFinished: false,
  isGameStarted: false,
  hasSolution: false,
  level: 10,
  operation: operations.addition.name,
  secondDigit: 0,
  score: 0,
  total: 0,
  userInput: '',
  gameStatistic: [],
};

export function getDigit(level) {
  const levelRatio = 2 + level;
  return Math.floor(Math.random() * levelRatio) + 1;
}

export function getTotal(firstDigit, secondDigit, operation) {
  if (operation === operations.addition.name) {
    return firstDigit + secondDigit;
  }
  return null;
}

export function validateInput(userInput) {
  return userInput.length > 1 && userInput[0] === '0'
    ? userInput.slice(1, userInput.length)
    : userInput;
}

export function removeUserInput(userInput) {
  return userInput.length > 1
    ? userInput.slice(0, userInput.length - 1)
    : '';
}

export function recordSession(state) {
  return {
    condition: `${state.firstDigit} ${operations[state.operation].symbol} ${state.secondDigit}`,
    correctSolution: !state.isCorrectSolution && state.total,
    isCorrectSolution: state.isCorrectSolution,
    id: Date.now(),
    solution: state.userInput,
  };
}

export function mathReducer(state = initialState, action) {
  switch (action.type) {
    case mathActions.HANDLE_SCORE:
      return {
        ...state,
        score: state.isCorrectSolution ? (state.score + 1) : (state.score - 1),
      };
    case mathActions.CHANGE_USER_INPUT:
      return {
        ...state,
        userInput: validateInput(state.userInput + action.userInput),
      };
    case mathActions.REMOVE_USER_INPUT:
      return {
        ...state,
        userInput: removeUserInput(state.userInput),
      };
    case mathActions.CLEAR_USER_INPUT:
      return {
        ...state,
        userInput: '',
      };
    case mathActions.GENERATE_DIGITS:
      return {
        ...state,
        firstDigit: getDigit(state.level),
        secondDigit: getDigit(state.level),
      };
    case mathActions.GET_TOTAL:
      return {
        ...state,
        total: getTotal(state.firstDigit, state.secondDigit, state.operation),
      };
    case mathActions.CHECK_SOLUTION:
      return {
        ...state,
        isCorrectSolution: state.total === Number(action.solution),
        hasSolution: true,
      };
    case mathActions.START_GAME:
      return {
        ...state,
        isGameStarted: true,
        isGameFinished: false,
      };
    case mathActions.FINISH_GAME:
      return {
        ...state,
        isGameFinished: true,
        isGameStarted: false,
      };
    case mathActions.RECORD_SESSION:
      const data = recordSession(state);
      state.gameStatistic.push(data);
      return state;
    default:
      return state;
  }
}

export default mathReducer;
