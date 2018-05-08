import React from 'react';
import style from './total.css';

export const Total = ({ total }) => (
  <div className={style.totalContainer}>
    <span className={style.total}>{total}</span>
  </div>
);

export default Total;
