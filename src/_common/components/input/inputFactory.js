import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import styles from './input.css';

const Input = ({
  errorText,
  id,
  labelText,
  onChange,
  type,
  value,
}) => {
  const inputClasses = classNames(styles.input);
  const islabelShown = id && (labelText || errorText);
  const labelContent = errorText || labelText;

  return (
    <Fragment>
      {islabelShown && (
        <label htmlFor={id}>{labelContent}</label>
      )}
      <input
        className={inputClasses}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
      />
    </Fragment>
  );
};

Input.defaultProps = {
  errorText: null,
  id: null,
  labelText: null,
  value: '',
};

Input.propTypes = {
  errorText: PropTypes.string,
  id: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Input;
