import React from 'react';
import Digit from './digit';
import Total from './total';
import Operation from './operation';
import operations from '../constants/operations';
import style from './gameDisplay.css';

export const GameDisplay = ({
  firstDigit,
  operation,
  secondDigit,
  total,
}) => (
    <div className={style.gameDisplay}>
      <Digit
        digit={firstDigit}
      />
      <Operation
        operation={operation}
      />
      <Digit
        digit={secondDigit}
      />
      <Operation
        operation={operations.equality.name}
      />
      <Total
        total={total}
      />
    </div>
);

export default GameDisplay;
