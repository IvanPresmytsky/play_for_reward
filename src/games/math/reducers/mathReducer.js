import { mathActions } from '../actions/mathActions';

const initialState = {
  firstDigit: 0,
  secondDigit: 0,
  level: 1,
};

export function getDigit(level) {
  const levelRatio = 2 + level;
  return Math.floor(Math.random() * levelRatio) + 1;
}

export function mathRouter(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case mathActions.GENERATE_DIGITS:     
      return {
        ...state,
        firstDigit: getDigit(state.level),
        secondDigit: getDigit(state.level),
      }
    default:
      return state;
  }
}

export default mathRouter;
