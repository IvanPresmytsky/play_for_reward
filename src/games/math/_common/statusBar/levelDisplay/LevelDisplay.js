import PropTypes from 'prop-types';
import React from 'react';
import style from './LevelDisplay.css';

export const LevelDisplay = ({ level }) => (
  <div className={style.levelDisplay}>
    <span className={style.levelText}>
      {`Level: ${level}`}
    </span>
  </div>
);

LevelDisplay.propTypes = {
  level: PropTypes.number.isRequired,
};

export default LevelDisplay;
