import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import operations from '../constants/operations';
import DigitsPanel from '../digitsPanel';
import GameDisplay from '../gameDisplay';
import StatusBar from '../statusBar';

import style from './arithmeticGame.css';

export class ArithmeticGame extends Component {
  componentDidMount() {
    const {
      match,
      setOperation,
      resetSession,
    } = this.props;

    const operation = match.params && match.params.game;
    setOperation(operation);
    resetSession();
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
      isGameStarted,
      hasSolution,
      isCorrectSolution,
      level,
      match,
      score,
      userInput,
    } = this.props;
    const { game } = match.params;
    const gameClasses = classNames(style.game, style[game]);

    return (
      <div className={gameClasses}>
        <h2>{game} game</h2>
        <StatusBar
          isGameStarted={isGameStarted}
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


ArithmeticGame.propTypes = {
  changeUserInput: PropTypes.func.isRequired,
  finishSession: PropTypes.func.isRequired,
  hasSolution: PropTypes.bool.isRequired,
  isCorrectSolution: PropTypes.bool.isRequired,
  isGameStarted: PropTypes.bool.isRequired,
  level: PropTypes.number.isRequired,
  match: PropTypes.object.isRequired,
  removeUserInput: PropTypes.func.isRequired,
  resetSession: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  setOperation: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  userInput: PropTypes.string.isRequired,
};

export default ArithmeticGame;
