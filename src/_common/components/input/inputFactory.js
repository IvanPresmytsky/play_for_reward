import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment, useState, forwardRef } from 'react';

import styles from './input.css';

const Input = forwardRef(({
  id,
  getValue,
  labelText,
  type,
  validateSymbol,
}, ref) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const inputClasses = classNames(styles.input);
  const islabelShown = id && (labelText || error);
  const labelContent = error || labelText;

  const processValue = (valueToProcess, errorToProcess) => {
    setValue(valueToProcess);
    getValue(valueToProcess);
    setError(errorToProcess);
  };

  const onChangeValue = e => {
    if (!e) return false;

    e.preventDefault();
    const nextValue = e.target && e.target.value;

    if (nextValue.length < value.length) {
      processValue(nextValue, null);
      return false;
    }

    const currentSymbol = nextValue && nextValue[nextValue.length - 1];
    const isValidSymbol = currentSymbol && validateSymbol(currentSymbol);

    if (isValidSymbol) {
      processValue(nextValue, null);
    } else {
      processValue(value, `"${currentSymbol}" is not allowed for ${type}`);
    }
  };

  return (
    <Fragment>
      {islabelShown && (
        <label htmlFor={id}>{labelContent}</label>
      )}
      <input
        className={inputClasses}
        id={id}
        ref={ref}
        type={type}
        onChange={onChangeValue}
        value={value}
      />
    </Fragment>
  );
});

Input.defaultProps = {
  errorText: null,
  id: null,
  labelText: null,
  value: '',
};

Input.propTypes = {
  errorText: PropTypes.string,
  id: PropTypes.string,
  getValue: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  validateSymbol: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Input;
