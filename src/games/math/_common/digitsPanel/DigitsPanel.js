import Button from '~/_common/components/button';
import buttonMods from '~/_common/components/button/mods';
import PropTypes from 'prop-types';
import React from 'react';

import style from './DigitsPanel.css';

export const DigitsPanel = ({
  digitBtnHandler,
  removeBtnClickHandler,
  solveBtnHandler,
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
    ));

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

DigitsPanel.propTypes = {
  digitBtnHandler: PropTypes.func.isRequired,
  removeBtnClickHandler: PropTypes.func.isRequired,
  solveBtnHandler: PropTypes.func.isRequired,
};

export default DigitsPanel;