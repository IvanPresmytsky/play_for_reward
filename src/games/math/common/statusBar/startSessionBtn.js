import React from 'react';
import style from './startSessionBtn.css';

export const StartSessionBtn = ({ clickHandler }) => (
  <button
    className={style.startSessionBtn}
    onClick={clickHandler}
  >
    Start
  </button>
);

export default StartSessionBtn;
