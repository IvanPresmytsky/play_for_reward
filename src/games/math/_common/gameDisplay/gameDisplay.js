import React from 'react';
import { connect } from 'react-redux';
import Digit from './digit';
import Total from './total';
import Operation from './operation';
import operations from '../constants/operations';
import style from './gameDisplay.css';

export const GameDisplay = ({
  firstDigit,
  operation,
  secondDigit,
  userInput,
}) => (
  <div className={style.gameDisplay}>
    <Digit digit={firstDigit} />
    <Operation operation={operation} />
    <Digit digit={secondDigit} />
    <Operation operation={operations.equality.name} />
    <Total total={userInput} />
  </div>
);

const mapStateToProps = state => ({
  firstDigit: state.math.firstDigit,
  secondDigit: state.math.secondDigit,
});

export default connect(mapStateToProps, null)(GameDisplay);
