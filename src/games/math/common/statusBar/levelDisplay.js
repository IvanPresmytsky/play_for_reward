import React from 'react';
import style from './levelDisplay.css';

export const LevelDisplay = ({ level }) => (
  <div className={style.levelDisplay}>
    <span className={style.levelText}>
      {`Level: ${level}`}
    </span>
  </div>
);

export default LevelDisplay;
