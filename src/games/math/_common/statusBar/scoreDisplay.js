import React from 'react';
import style from './scoreDisplay.css';

export const ScoreDisplay = ({ score }) => (
    <div className={style.scoreDisplay}>
      <span className={style.scoreText}>
        {`Score: ${score}`}
      </span>
    </div>
);

export default ScoreDisplay;
