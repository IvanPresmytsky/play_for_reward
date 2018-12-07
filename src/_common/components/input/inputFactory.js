import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import styles from './input.css';

const Input = ({ type }) => {
  const inputClasses = classNames(styles.input);
  return (
    <Fragment>
      <labelFor></labelFor>
      <input
        className={inputClasses}
        type={type}
      />
    </Fragment>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Input;
