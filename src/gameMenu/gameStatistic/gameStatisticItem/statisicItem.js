import React from 'react';

import style from './statisticItem.css';

export const StatisticItem = ({ data }) => (
  <div className={style.StatisticItem}>
    <span className={style.date}>
      {`duration: ${data.duration} sec `}
    </span>
    <span className={style.condition}>
      {data.condition}
    </span>
    <span> = </span>
    <span className={style.solution}>
      {` ${data.solution}`}
    </span>
    <span className={style.correctSolution}>
      {!data.isCorrectSolution && ` ${data.correctSolution}` }
    </span>
  </div>
);

export default StatisticItem;
