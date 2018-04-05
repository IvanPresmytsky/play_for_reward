import React from 'react';
import style from './digit.css';

export const DigitBtn = ({ digit, digitBtnHandler }) => (
    <button
      className={style.digitBtn}
      id={digit}
      onClick={digitBtnHandler}
    >
      {digit}
    </button>
);

export default DigitBtn;
