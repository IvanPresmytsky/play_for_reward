import { mathActions } from '../actions/mathActions';
import operations from '../common/constants/operations';

const initialState = {
  firstDigit: 0,
  gameStarted: false,
  isCorrectSolution: false,
  hasSolution: false,
  level: 10,
  operation: operations.addition.name,
  secondDigit: 0,
  score: 0,
  total: 0,
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

export function mathRouter(state = initialState, action) {
  switch (action.type) {
    case mathActions.ADD_SCORE:
      return {
        ...state,
        score: state.score + 1
      }
    case mathActions.REMOVE_SCORE:
      return {
        ...state,
        score: state.score - 1
      }
    case mathActions.GENERATE_DIGITS:     
      return {
        ...state,
        firstDigit: getDigit(state.level),
        secondDigit: getDigit(state.level),
      }
    case mathActions.GET_TOTAL:
      return {
        ...state,
        total: getTotal(state.firstDigit, state.secondDigit, state.operation)
      }
    case mathActions.CHECK_SOLUTION:
      return {
        ...state,
        isCorrectSolution: state.total === action.solution,
        hasSolution: true,
      }
    case mathActions.START_GAME:
      return {
        ...state,
        gameStarted: true,
      }
    default:
      return state;
  }
}

export default mathRouter;
