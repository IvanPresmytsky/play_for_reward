import React from 'react';
import Button from '~/_common/button';
import List from '~/_common/list';

import style from './digitsPanel.css';

export const DigitsPanel = ({
  digitBtnHandler,
  removeBtnClickHandler,
  solveBtnHandler
}) => {
  const digits = Array.from(Array(10).keys())
    .map(digit => (
      <div className={`${style.digit} ${style[`digit${digit}`]}`}>
        <Button
          clickHandler={digitBtnHandler}
          id={digit}
          key={digit}
          mods={['responsive']}
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
          mods={['green', 'responsive']}
          text="Solve"
        />
      </div>
      <div className={style.removeBtn}>
        <Button
          clickHandler={removeBtnClickHandler}
          key="removeBtn"
          mods={['red', 'responsive']}
          text="Remove"
        />
      </div>
    </div>
  );
};

export default DigitsPanel;
