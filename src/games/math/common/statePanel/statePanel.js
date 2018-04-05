import classnames from 'classnames';
import React from 'react';
import style from './statePanel.css';

export const StatePanel = ({ isCorrectSolution }) => {
  const solutionTextClasses = classnames(style.solutionText, {
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
    </div>
  );
};

export default StatePanel;
