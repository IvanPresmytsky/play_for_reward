import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import operations from '../constants/operations';
import DigitsPanel from '../digitsPanel/digitsPanel';
import GameDisplay from '../gameDisplay/gameDisplay';
import { StatusBar } from '../statusBar/statusBar';
import {
  changeUserInput,
  finishSession,
  removeUserInput,
  resetSession,
  setOperation,
} from '../../actions/mathActions';

import style from './arithmeticGame.css';

export class ArithmeticGame extends Component {
  componentDidMount() {
    const operation = this.props.match.params && this.props.match.params.game;
    this.props.setOperation(operation);
    this.props.resetSession();
  }

  onDigitClick = e => {
    e.preventDefault();
    const digit = e.target && e.target.id;
    this.props.changeUserInput(digit);
  }

  onRemoveBtnClick = e => {
    e.preventDefault();
    this.props.removeUserInput();
  }

  onSolveClick = e => {
    e.preventDefault();
    this.props.finishSession(this.props.userInput);
  }

  render() {
    const {
      gameStarted,
      hasSolution,
      isCorrectSolution,
      level,
      match,
      score,
      userInput,
    } = this.props;
    const { game } = match.params;

    return (
      <div className={style[game]}>
        <h2>{game} game</h2>
        <StatusBar
          gameStarted={gameStarted}
          isCorrectSolution={isCorrectSolution}
          hasSolution={hasSolution}
          level={level}
          score={score}
        />
        <GameDisplay
          operation={operations[game].name}
          userInput={userInput}
        />
        <DigitsPanel
          digitBtnHandler={this.onDigitClick}
          removeBtnClickHandler={this.onRemoveBtnClick}
          solveBtnHandler={this.onSolveClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameStarted: state.math.gameStarted,
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
