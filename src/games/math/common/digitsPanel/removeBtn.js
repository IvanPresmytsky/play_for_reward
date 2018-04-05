import React from 'react';
import style from './removeBtn.css';

export const RemoveBtn = ({ clickHandler }) => (
    <button
      className={style.removeBtn}
      onClick={clickHandler}
    >
      Remove
    </button>
);

export default RemoveBtn;