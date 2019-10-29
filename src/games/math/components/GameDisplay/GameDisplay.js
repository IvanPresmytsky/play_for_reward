import React from 'react';
import PropTypes from 'prop-types';

import Flex from '~/_common/components/Flex';
import getOperationSymbol from '../../_common/_helpers/operationHelper';
import operations from '../../_common/constants/operations';
import StyledLabel from './components/StyledLabel';

export const GameDisplay = ({
  firstDigit,
  operation,
  secondDigit,
  userInput,
}) => (
  <Flex
    alignItems="center"
    border="4px solid green"
    borderRadius="5px"
    justifyContent="center"
    width="100%"
  >
    <StyledLabel text={`${firstDigit}`} />
    <StyledLabel text={getOperationSymbol(operation)} />
    <StyledLabel text={`${secondDigit}`} />
    <StyledLabel text={operations.equality.symbol} />
    <StyledLabel text={`${userInput}`} />
  </Flex>
);

GameDisplay.propTypes = {
  firstDigit: PropTypes.number.isRequired,
  operation: PropTypes.oneOf(Object.keys(operations)),
  secondDigit: PropTypes.number.isRequired,
  userInput: PropTypes.string.isRequired,
};

export default GameDisplay;
