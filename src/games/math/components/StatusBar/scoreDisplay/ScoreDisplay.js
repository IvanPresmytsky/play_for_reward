import PropTypes from 'prop-types';
import React from 'react';
import style from './ScoreDisplay.css';

export const ScoreDisplay = ({ score }) => (
    <div className={style.scoreDisplay}>
      <span className={style.scoreText}>
        {`Score: ${score}`}
      </span>
    </div>
);

ScoreDisplay.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreDisplay;
