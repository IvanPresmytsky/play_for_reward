import PropTypes from 'prop-types';
import React from 'react';

import style from './Digit.css';

export const Digit = ({ digit }) => (
  <div className={style.digitContainer}>
    <span className={style.digit}>{digit}</span>
  </div>
);

Digit.propTypes = {
  digit: PropTypes.number.isRequired,
};

export default Digit;
