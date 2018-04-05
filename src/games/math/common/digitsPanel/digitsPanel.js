import React from 'react';
import DigitBtn from './digit';
import RemoveBtn from './removeBtn';
import SolveBtn from './solveBtn';

import style from './digitsPanel.css';

export const DigitsPanel = ({ digitBtnHandler, removeBtnClickHandler, solveBtnHandler }) => {
  const digits = Array.from(Array(10).keys())
    .map(digit => <DigitBtn digit={digit} digitBtnHandler={digitBtnHandler} key={digit} />);

  return (
    <div className={style.digitsPanel}>
      {digits}
      <SolveBtn
        clickHandler={solveBtnHandler}
        key="solveBtn"
      />
      <RemoveBtn
        clickHandler={removeBtnClickHandler}
        key="removeBtn"
      />
    </div>
  );
};

export default DigitsPanel;
