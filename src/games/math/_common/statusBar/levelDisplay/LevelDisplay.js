import PropTypes from 'prop-types';
import React from 'react';

export const LevelDisplay = ({ level }) => (
  <div>
    <span>
      {`Level: ${level}`}
    </span>
  </div>
);

LevelDisplay.propTypes = {
  level: PropTypes.number.isRequired,
};

export default LevelDisplay;
