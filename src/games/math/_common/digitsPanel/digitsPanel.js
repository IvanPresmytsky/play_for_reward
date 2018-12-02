import React from 'react';
import Button from '~/_common/button';
import buttonMods from '~/_common/button/mods';

import style from './digitsPanel.css';

export const DigitsPanel = ({
  digitBtnHandler,
  removeBtnClickHandler,
  solveBtnHandler
}) => {
  const { 
    GREEN,
    RED,
    RESPONSIVE,
  } = buttonMods;

  const digits = Array.from(Array(10).keys())
    .map(digit => (
      <div className={`${style.digit} ${style[`digit${digit}`]}`}>
        <Button
          clickHandler={digitBtnHandler}
          id={digit}
          key={digit}
          mods={[RESPONSIVE]}
          text={digit}
        />
      </div>
      )
    );

  return (
    <div className={style.digitsPanel}>
      {digits}
      <div className={style.solveBtn}>
        <Button
          clickHandler={solveBtnHandler}
          key="solveBtn"
          mods={[GREEN, RESPONSIVE]}
          text="Solve"
        />
      </div>
      <div className={style.removeBtn}>
        <Button
          clickHandler={removeBtnClickHandler}
          key="removeBtn"
          mods={[RED, RESPONSIVE]}
          text="Remove"
        />
      </div>
    </div>
  );
};

export default DigitsPanel;
