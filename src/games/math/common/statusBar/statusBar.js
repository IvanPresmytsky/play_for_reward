import React from 'react';
import Button from '../button/button';
import ScoreDisplay from './scoreDisplay';
import SessionTimer from './sessionTimer';
import SolutionDisplay from './solutionDisplay';
import style from './statusBar.css';

export const StatusBar = ({
  initialTime,
  isCorrectSolution,
  hasSolution,
  score,
  startSessionBtnHandler,
  time,
}) => (
    <div className={style.statusBar}>
      <Button
        clickHandler={startSessionBtnHandler}
        mods={['green']}
        text="Start"
      />
      <SessionTimer
        initialTime={initialTime}
        time={time}
      />
      <SolutionDisplay
        isCorrectSolution={isCorrectSolution}
        hasSolution={hasSolution}
      />
      <ScoreDisplay score={score} />
    </div>
);

export default StatusBar;
