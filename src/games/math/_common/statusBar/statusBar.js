import React from 'react';
import ScoreDisplay from './scoreDisplay';
import SessionTimer from './sessionTimer';
import SolutionDisplay from './solutionDisplay';
import LevelDisplay from './levelDisplay';
import style from './statusBar.css';

export const StatusBar = ({
  isCorrectSolution,
  isGameStarted,
  hasSolution,
  level,
  score,
}) => (
  <div className={style.statusBar}>
    <SessionTimer isGameStarted={isGameStarted} />
    <LevelDisplay level={level} />
    <SolutionDisplay
      isCorrectSolution={isCorrectSolution}
      hasSolution={hasSolution}
    />
    <ScoreDisplay score={score} />
  </div>
);

export default StatusBar;
