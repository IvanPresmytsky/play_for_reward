import React from 'react';

import style from './statisticItem.css';

export const StatisticItem = ({ condition, correctSolution, date, isCorrectSolution, solution }) => (
  <div className={style.StatisticItem}>
    <span className={style.date}>
      {`${date}: `}
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

export default StatisticItem;
