import React from 'react';
import PropTypes from 'prop-types';

import Label from '~/_common/components/Label';
import style from './ScoreDisplay.css';

export const ScoreDisplay = ({ score }) => (
    <div className={style.scoreDisplay}>
      <Label
        color="green"
        fontSize="30px"
        text={`Score: ${score}`}
      />
    </div>
);

ScoreDisplay.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreDisplay;
