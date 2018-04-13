import React from 'react';
import Button from '../../../../common/button/button';
import ScoreDisplay from './scoreDisplay';
import SessionTimer from './sessionTimer';
import SolutionDisplay from './solutionDisplay';
import style from './statusBar.css';

export const StatusBar = ({
  gameStarted,
  isCorrectSolution,
  hasSolution,
  score,
  startSessionBtnHandler,
}) => (
    <div className={style.statusBar}>
      <Button
        clickHandler={startSessionBtnHandler}
        mods={['green']}
        text="Start"
      />
      <SessionTimer
        gameStarted={gameStarted}
      />
      <SolutionDisplay
        isCorrectSolution={isCorrectSolution}
        hasSolution={hasSolution}
      />
      <ScoreDisplay score={score} />
    </div>
);

export default StatusBar;
