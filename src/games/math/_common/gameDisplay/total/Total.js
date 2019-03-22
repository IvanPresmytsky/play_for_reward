import PropTypes from 'prop-types';
import React from 'react';

import style from './Total.css';

export const Total = ({ total }) => (
  <div className={style.totalContainer}>
    <span className={style.total}>{total}</span>
  </div>
);

Total.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Total;
