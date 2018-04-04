import React from 'react';
import style from './digit.css';

export const Digit = ({ digit, digitHandler }) => (
    <button
      className={style.digit}
      id={digit}
      onClick={digitHandler}
    >
      {digit}
    </button>
);

export default Digit;
