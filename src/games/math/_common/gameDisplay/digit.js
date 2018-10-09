import React from 'react';
import style from './digit.css';

export const Digit = ({ digit }) => (
  <div className={style.digitContainer}>
    <span className={style.digit}>{digit}</span>
  </div>
);

export default Digit;
