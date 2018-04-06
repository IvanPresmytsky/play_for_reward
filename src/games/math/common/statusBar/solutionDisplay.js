import classnames from 'classnames';
import React from 'react';
import style from './solutionDisplay.css';

export const SolutionDisplay = ({ isCorrectSolution, hasSolution }) => {
  const solutionTextClasses = classnames(style.solutionText, {
    [style.solutionHidden]: !hasSolution,
    [style.correctSolution]: isCorrectSolution,
    [style.incorrectSolution]: !isCorrectSolution,
  });

  return (
    <div className={style.solutionDisplay}>
      <span className={solutionTextClasses}>
        {isCorrectSolution ? 'Correct' : 'Incorrect'}
      </span>
    </div>
  );
};

export default SolutionDisplay;
