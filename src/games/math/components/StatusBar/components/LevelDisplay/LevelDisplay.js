import React from 'react';
import PropTypes from 'prop-types';

import Label from '~/_common/components/Label';

export const LevelDisplay = ({ level }) => (
  <div>
    <Label
      color="green"
      fontSize="30px"
      text={`Level: ${level}`}
    />
  </div>
);

LevelDisplay.propTypes = {
  level: PropTypes.number.isRequired,
};

export default LevelDisplay;
