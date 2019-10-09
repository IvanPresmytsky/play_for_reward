import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import style from './SolutionDisplay.css';

export const SolutionDisplay = ({ isCorrectSolution, hasSolution }) => {
  const solutionTextClasses = classnames(style.solutionText, {
    [style.solutionVisible]: hasSolution,
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

SolutionDisplay.propTypes = {
  isCorrectSolution: PropTypes.bool.isRequired,
  hasSolution: PropTypes.bool.isRequired,
};

export default SolutionDisplay;
