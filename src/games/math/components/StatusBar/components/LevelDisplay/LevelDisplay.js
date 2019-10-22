import React from 'react';
import PropTypes from 'prop-types';

import Label from '~/_common/components/Label';
import Flex from '~/_common/components/Flex';

export const LevelDisplay = ({ level }) => (
  <Flex>
    <Label
      color="green"
      fontSize="30px"
      text={`Level: ${level}`}
    />
  </Flex>
);

LevelDisplay.propTypes = {
  level: PropTypes.number.isRequired,
};

export default LevelDisplay;
