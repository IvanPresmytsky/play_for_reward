import React from 'react';
import ScoreDisplay from './scoreDisplay';
import SessionTimer from './sessionTimer';
import SolutionDisplay from './solutionDisplay';
import style from './statusBar.css';

export const StatusBar = ({
  gameStarted,
  isCorrectSolution,
  hasSolution,
  score,
}) => (
    <div className={style.statusBar}>
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
