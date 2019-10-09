import PropTypes from 'prop-types';
import React from 'react';

import Digit from './digit';
import Total from './total';
import Operation from './operation';
import operations from '../../_common/constants/operations';

import * as S from './StyledGameDisplay';

export const GameDisplay = ({
  firstDigit,
  operation,
  secondDigit,
  userInput,
}) => (
  <S.StyledGameDisplay>
    <Digit digit={firstDigit} />
    <Operation operation={operation} />
    <Digit digit={secondDigit} />
    <Operation operation={operations.equality.name} />
    <Total total={userInput} />
  </S.StyledGameDisplay>
);

GameDisplay.propTypes = {
  firstDigit: PropTypes.number.isRequired,
  operation: PropTypes.oneOf(Object.keys(operations)),
  secondDigit: PropTypes.number.isRequired,
  userInput: PropTypes.string.isRequired,
};

export default GameDisplay;
