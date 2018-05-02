import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import operations from '../common/constants/operations';
import DigitsPanel from '../common/digitsPanel/digitsPanel';
import GameDisplay from '../common/gameDisplay/gameDisplay';
import { StatusBar } from '../common/statusBar/statusBar';
import {
  changeUserInput,
  checkLevel,
  checkSolution,
  clearUserInput,
  generateDigits,
  getTotal,
  handleScore,
  recordSession,
  removeUserInput,
  resetSession,
  startGame,
} from '../actions/mathActions';

import style from './addition.css';

export class Addition extends Component {
  constructor() {
    super();

    this.resetSession = this.resetSession.bind(this);
    this.onSolveClick = this.onSolveClick.bind(this);
    this.onDigitClick = this.onDigitClick.bind(this);
    this.onRemoveBtnClick = this.onRemoveBtnClick.bind(this);
  }

  componentDidMount() {
    this.resetSession();
  }

  resetSession() {
    this.props.generateDigits();
    this.props.getTotal();
    this.props.clearUserInput();
  }

  onDigitClick(e) {
    e.preventDefault();
    const digit = e.target && e.target.id;
    this.props.changeUserInput(digit);
  }

  onRemoveBtnClick(e) {
    e.preventDefault();
    this.props.removeUserInput();
  }

  onSolveClick(e) {
    e.preventDefault();

    this.props.checkSolution(this.props.userInput);
    this.props.handleScore();
    this.props.checkLevel();
    this.props.recordSession();
    this.props.resetSession();
  }

  render() {
    const {
      gameStarted,
      hasSolution,
      isCorrectSolution,
      level,
      score,
      userInput,
    } = this.props;

    return (
      <div className={style.addition}>
        <h2>Addition game</h2>
        <StatusBar
          gameStarted={gameStarted}
          isCorrectSolution={isCorrectSolution}
          hasSolution={hasSolution}
          level={level}
          score={score}
        />
        <GameDisplay
          operation={operations.addition.name}
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
  checkLevel: bindActionCreators(checkLevel, dispatch),
  checkSolution: bindActionCreators(checkSolution, dispatch),
  clearUserInput: bindActionCreators(clearUserInput, dispatch),
  generateDigits: bindActionCreators(generateDigits, dispatch),
  getTotal: bindActionCreators(getTotal, dispatch),
  handleScore: bindActionCreators(handleScore, dispatch),
  recordSession: bindActionCreators(recordSession, dispatch),
  removeUserInput: bindActionCreators(removeUserInput, dispatch),
  resetSession: bindActionCreators(resetSession, dispatch),
  startGame: bindActionCreators(startGame, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Addition));
