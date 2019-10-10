import React from 'react';
import PropTypes from 'prop-types';

import getOperationSymbol from '../../_common/_helpers/operationHelper';
import operations from '../../_common/constants/operations';

import * as S from './StyledGameDisplay';

export const GameDisplay = ({
  firstDigit,
  operation,
  secondDigit,
  userInput,
}) => (
  <S.StyledGameDisplay>
    <S.StyledLabel text={`${firstDigit}`} />
    <S.StyledLabel text={getOperationSymbol(operation)} />
    <S.StyledLabel text={`${secondDigit}`} />
    <S.StyledLabel text={operations.equality.symbol} />
    <S.StyledLabel text={`${userInput}`} />
  </S.StyledGameDisplay>
);

GameDisplay.propTypes = {
  firstDigit: PropTypes.number.isRequired,
  operation: PropTypes.oneOf(Object.keys(operations)),
  secondDigit: PropTypes.number.isRequired,
  userInput: PropTypes.string.isRequired,
};

export default GameDisplay;
