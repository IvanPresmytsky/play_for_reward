import operations from '../../constants/operations';

export default (state, timeStamp) => ({
  condition: `${state.firstDigit} ${operations[state.operation].symbol} ${state.secondDigit}`,
  correctSolution: !state.isCorrectSolution ? state.total : null,
  isCorrectSolution: state.isCorrectSolution,
  id: timeStamp,
  duration: parseFloat(((timeStamp - state.sessionTime) / 1000).toFixed(1)),
  level: state.level,
  score: state.score,
  solution: state.userInput,
});
