import React from 'react';
import style from './solveBtn.css';

export const SolveBtn = ({ clickHandler }) => (
  <button
    className={style.removeBtn}
    onClick={clickHandler}
  >
    Solve
  </button>
);

export default SolveBtn;
