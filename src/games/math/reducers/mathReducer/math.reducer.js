import dateformat from 'dateformat';
import { handleActions } from 'redux-actions';
import mathHelpers from '../../_common/_helpers';
import { mathActions } from '../../actions/mathActions';
import operations from '../../_common/constants/operations';

export const initialState = {
  digitsQuantity: 2,
  firstDigit: 0,
  isCorrectSolution: false,
  isGameFinished: false,
  isGameStarted: false,
  hasSolution: false,
  level: 1,
  operation: operations.addition.name,
  secondDigit: 0,
  score: 0,
  scoreToNextLevel: 10,
  sessionTime: 0,
  total: 0,
  userInput: '',
  gameStatistic: [],
  mainStatistic: {},
};

export default handleActions(
  {
    [mathActions.CHANGE_USER_INPUT]: (state, action) => ({
      ...state,
      userInput: mathHelpers.validateInput(state.userInput + action.payload),
    }),

    [mathActions.CHECK_LEVEL]: state => {
      const newLevel = mathHelpers.checkLevel(state);
      return {
        ...state,
        level: newLevel,
        scoreToNextLevel: mathHelpers.setScoreToNextLevel(newLevel),
      };
    },

    [mathActions.CHECK_SOLUTION]: (state, action) => ({
      ...state,
      isCorrectSolution: state.total === Number(action.payload),
      hasSolution: true,
    }),

    [mathActions.CLEAR_USER_INPUT]: state => ({
      ...state,
      userInput: '',
    }),

    [mathActions.FINISH_GAME]: state => ({
      ...state,
      isGameFinished: true,
      isGameStarted: false,
    }),

    [mathActions.GENERATE_DIGITS]: state => {
      const [firstDigit, secondDigit] = mathHelpers.getDigits(state.digitsQuantity, state.level, state.operation);
      return {
        ...state,
        firstDigit,
        secondDigit,
      };
    },

    [mathActions.GET_TOTAL]: state => ({
      ...state,
      total: mathHelpers.getTotal(state.firstDigit, state.secondDigit, state.operation),
    }),

    [mathActions.HANDLE_SCORE]: state => ({
      ...state,
      score: state.isCorrectSolution ? (state.score + 1) : (state.score - 2),
    }),

    [mathActions.RECORD_GAME]: (state, action) => {
      const date = dateformat(new Date(Date.now()), 'isoDateTime');
      const { category, game } = action.payload;
      state.mainStatistic[date] = {
        category,
        game,
        statistic: state.gameStatistic,
      };

      return {
        ...state,
        sessionTime: 0,
        gameStatistic: [],
      };
    },

    [mathActions.RECORD_SESSION]: state => {
      const timeStamp = Date.now();
      const data = mathHelpers.recordSession(state, timeStamp);
      state.gameStatistic.push(data);

      return {
        ...state,
        sessionTime: timeStamp,
      };
    },

    [mathActions.REMOVE_USER_INPUT]: state => ({
      ...state,
      userInput: mathHelpers.removeUserInput(state.userInput),
    }),

    [mathActions.SET_OPERATION]: (state, action) => ({
      ...state,
      operation: action.payload,
    }),

    [mathActions.START_GAME]: state => ({
      ...state,
      isGameStarted: true,
      isGameFinished: false,
      sessionTime: Date.now(),
    }),
  },
  initialState,
);
