import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  changeUserInput,
  finishSession,
  removeUserInput,
  resetSession,
  setOperation,
} from '~/games/math/actions/mathActions';
import ArithmeticGame from './arithmeticGame';

const mapStateToProps = state => ({
  isGameStarted: state.math.isGameStarted,
  isCorrectSolution: state.math.isCorrectSolution,
  hasSolution: state.math.hasSolution,
  level: state.math.level,
  total: state.math.total,
  score: state.math.score,
  userInput: state.math.userInput,
});

const mapDispatchToProps = dispatch => ({
  changeUserInput: bindActionCreators(changeUserInput, dispatch),
  finishSession: bindActionCreators(finishSession, dispatch),
  removeUserInput: bindActionCreators(removeUserInput, dispatch),
  resetSession: bindActionCreators(resetSession, dispatch),
  setOperation: bindActionCreators(setOperation, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArithmeticGame));
