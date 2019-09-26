import PropTypes from 'prop-types';
import React from 'react';
import { Button, buttonMods } from '~/_common/components/Button';

import style from './DigitsPanel.css';

export const DigitsPanel = ({
  digitBtnHandler,
  removeBtnClickHandler,
  solveBtnHandler,
}) => {
  const {
    CANCEL,
    RESPONSIVE_FULL,
  } = buttonMods;

  const digits = Array.from(Array(10).keys())
    .map(digit => (
      <div
        className={`${style.digit} ${style[`digit${digit}`]}`}
        key={digit}
      >
        <Button
          clickHandler={digitBtnHandler}
          id={digit}
          modifiers={[RESPONSIVE_FULL]}
        >
          {`${digit}`}
        </Button>
      </div>
    ));

  return (
    <div className={style.digitsPanel}>
      {digits}
      <div className={style.solveBtn} key="solveBtn">
        <Button
          clickHandler={solveBtnHandler}
          modifiers={[RESPONSIVE_FULL]}
        >
          Solve
        </Button>
      </div>
      <div className={style.removeBtn} key="removeBtn">
        <Button
          clickHandler={removeBtnClickHandler}
          modifiers={[CANCEL, RESPONSIVE_FULL]}
        >
          Remove
        </Button>
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
