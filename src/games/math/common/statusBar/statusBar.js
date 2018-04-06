import classnames from 'classnames';
import React from 'react';
import SessionTimer from './sessionTimer';
import style from './statusBar.css';
import StartSessionBtn from './startSessionBtn';

export const StatusBar = ({
  initialTime,
  isCorrectSolution,
  hasSolution,
  score,
  startSessionBtnHandler,
  time,
}) => {
  const solutionTextClasses = classnames(style.solutionText, {
    [style.solutionHidden]: !hasSolution,
    [style.correctSolution]: isCorrectSolution,
    [style.incorrectSolution]: !isCorrectSolution,
  });

  return (
    <div className={style.statusBar}>
      <StartSessionBtn clickHandler={startSessionBtnHandler} />
      <SessionTimer
        initialTime={initialTime}
        time={time}
      />
      <div className={style.solutionDisplay}>
        <span className={solutionTextClasses}>
          {isCorrectSolution ? 'Correct' : 'Incorrect'}
        </span>
      </div>
      <div className={style.scoreContainer}>
        <span className={style.scoreText}>
          {`Score: ${score}`}
        </span>
      </div>
    </div>
  );
};

export default StatusBar;
