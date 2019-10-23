import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { navigateToGameStatistic } from '~/_common/_helpers/navigationHelper';
import { Title, titleTypes } from '~/_common/components/Title';

import operations from '../../_common/constants/operations';
import DigitsPanel from '../DigitsPanel';
import GameDisplay from '../GameDisplay';
import StatusBar from '../StatusBar';

import * as S from './StyledArithmeticGame';

export const ArithmeticGame = ({
  changeUserInput,
  isGameStarted,
  finishGame,
  finishSession,
  hasSolution,
  isCorrectSolution,
  level,
  match,
  score,
  setOperation,
  startGame,
  removeUserInput,
  resetSession,
  userInput,
}) => {
  const { category, game } = match.params;

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

  const onTimerStopped = () => {
    finishGame();
    navigateToGameStatistic(category, game);
  };

  return (
    <S.StyledArithmeticGame>
      <Title text={`${game} game`} type={titleTypes.h2} />
      <StatusBar
        isGameStarted={isGameStarted}
        isCorrectSolution={isCorrectSolution}
        hasSolution={hasSolution}
        onTimerStarted={startGame}
        onTimerStopped={onTimerStopped}
        level={level}
        score={score}
      />
      <GameDisplay operation={operations[game].name} userInput={userInput} />
      <DigitsPanel
        digitBtnHandler={onDigitClick}
        removeBtnClickHandler={onRemoveBtnClick}
        solveBtnHandler={onSolveClick}
      />
    </S.StyledArithmeticGame>
  );
};


ArithmeticGame.propTypes = {
  changeUserInput: PropTypes.func.isRequired,
  finishGame: PropTypes.func.isRequired,
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
  startGame: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  userInput: PropTypes.string.isRequired,
};

export default ArithmeticGame;
