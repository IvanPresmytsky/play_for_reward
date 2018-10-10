import React from 'react';
import Button from 'common/button/button';

import style from './digitsPanel.css';

export const DigitsPanel = ({ digitBtnHandler, removeBtnClickHandler, solveBtnHandler }) => {
  const digits = Array.from(Array(10).keys())
    .map(digit => <Button clickHandler={digitBtnHandler} id={digit} key={digit} mods={['digit']} text={digit} />);

  return (
    <div className={style.digitsPanel}>
      {digits}
      <Button
        clickHandler={solveBtnHandler}
        key="solveBtn"
        mods={['green']}
        text="Solve"
      />
      <Button
        clickHandler={removeBtnClickHandler}
        key="removeBtn"
        mods={['red']}
        text="Remove"
      />
    </div>
  );
};

export default DigitsPanel;
