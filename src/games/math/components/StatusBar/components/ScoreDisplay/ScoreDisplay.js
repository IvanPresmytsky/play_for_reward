import React from 'react';
import PropTypes from 'prop-types';

import Flex from '~/_common/components/Flex';
import Label from '~/_common/components/Label';

export const ScoreDisplay = ({ score }) => (
    <Flex alignItems="center">
      <Label
        color="green"
        fontSize="30px"
        text={`Score: ${score}`}
      />
    </Flex>
);

ScoreDisplay.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreDisplay;
