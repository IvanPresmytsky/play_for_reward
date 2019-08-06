import PropTypes from 'prop-types';
import React from 'react';

import style from './StatisticItem.css';

export const StatisticItem = ({
  correctSolution,
  condition,
  duration,
  isCorrectSolution,
  solution,
}) => (
  <div className={style.StatisticItem}>
    <span className={style.date}>
      {`duration: ${duration} sec `}
    </span>
    <span className={style.condition}>
      {condition}
    </span>
    <span> = </span>
    <span className={style.solution}>
      {` ${solution}`}
    </span>
    <span className={style.correctSolution}>
      {!isCorrectSolution && ` ${correctSolution}` }
    </span>
  </div>
);

StatisticItem.propTypes = {
  correctSolution: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  isCorrectSolution: PropTypes.bool.isRequired,
  solution: PropTypes.number.isRequired,
};

export default StatisticItem;
