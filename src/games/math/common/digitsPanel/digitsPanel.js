import React from 'react';
import Digit from './digit';
import RemoveBtn from './removeBtn';

import style from './digitsPanel.css';

export const DigitsPanel = ({ digitHandler, removeBtnClickHandler }) => {
  const digits = Array.from(Array(10).keys())
    .map(digit => <Digit digit={digit} digitHandler={digitHandler} key={digit} />);

  return (
    <div className={style.digitsPanel}>
      {digits}
      <RemoveBtn clickHandler={removeBtnClickHandler} />
    </div>
  );
};

export default DigitsPanel;
