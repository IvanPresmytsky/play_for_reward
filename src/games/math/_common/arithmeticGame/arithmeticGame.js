import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import operations from '../constants/operations';
import DigitsPanel from '../digitsPanel';
import GameDisplay from '../gameDisplay';
import StatusBar from '../statusBar';

import style from './arithmeticGame.css';

export const ArithmeticGame = ({
  changeUserInput,
  isGameStarted,
  finishSession,
  hasSolution,
  isCorrectSolution,
  level,
  match,
  score,
  setOperation,
  removeUserInput,
  resetSession,
  userInput,
}) => {
  const { game } = match.params;

  useEffect(() => {
    setOperation(game);
    resetSession();
  }, [game, setOperation, resetSession]);

  const onDigitClick = e => {
    e.preventDefault();
    const digit = e.target && e.target.id;
    changeUserInput(digit);
  };

  const onRemoveBtnClick = e => {
    e.preventDefault();
    removeUserInput();
  };

  const onSolveClick = e => {
    e.preventDefault();
    finishSession(userInput);
  };

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
        digitBtnHandler={onDigitClick}
        removeBtnClickHandler={onRemoveBtnClick}
        solveBtnHandler={onSolveClick}
      />
    </div>
  );
};


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
