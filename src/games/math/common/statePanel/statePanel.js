import classnames from 'classnames';
import React from 'react';
import style from './statePanel.css';

export const StatePanel = ({ isCorrectSolution, hasSolution, score }) => {
  const solutionTextClasses = classnames(style.solutionText, {
    [style.solutionHidden]: !hasSolution,
    [style.correctSolution]: isCorrectSolution,
    [style.incorrectSolution]: !isCorrectSolution,
  });

  return (
    <div className={style.statePanel}>
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

export default StatePanel;
