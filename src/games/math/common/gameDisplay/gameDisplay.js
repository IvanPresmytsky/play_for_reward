import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Digit from './digit';
import Total from './total';
import Operation from './operation';
import operations from '../constants/operations';
import style from './gameDisplay.css';

export const GameDisplay = ({
  operation,
  userInput,
  ...props,
}) => (
    <div className={style.gameDisplay}>
      <Digit
        digit={props.firstDigit}
      />
      <Operation
        operation={operation}
      />
      <Digit
        digit={props.secondDigit}
      />
      <Operation
        operation={operations.equality.name}
      />
      <Total
        total={userInput}
      />
    </div>
);

const mapStateToProps = state => ({
  firstDigit: state.math.firstDigit,
  secondDigit: state.math.secondDigit,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(GameDisplay);
