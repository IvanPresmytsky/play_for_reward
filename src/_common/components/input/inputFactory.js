import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import styles from './input.css';

const Input = ({ id, labelText, type }) => {
  const inputClasses = classNames(styles.input);
  const islabelShown = id && labelText;

  return (
    <Fragment>
      {islabelShown && (
        <label htmlFor={id}>{labelText}</label>
      )}
      <input
        className={inputClasses}
        id={id}
        type={type}
      />
    </Fragment>
  );
};

Input.defaultProps = {
  id: null,
  labelText: null,
};

Input.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Input;
