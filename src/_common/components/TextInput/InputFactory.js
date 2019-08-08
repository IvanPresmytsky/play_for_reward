import PropTypes from 'prop-types';
import React, { Fragment, useState, forwardRef } from 'react';

import StyledInput from './StyledInput';

const Input = forwardRef(({
  errorText,
  getValue,
  id,
  labelText,
  type,
  validateSymbol,
  valueToMatch,
}, ref) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const islabelShown = id && (labelText || error || errorText);
  const labelContent = error || errorText || labelText;

  const processValue = (valueToProcess, errorToProcess) => {
    setValue(valueToProcess);
    getValue(valueToProcess);
    setError(errorToProcess);
  };

  const validateEquality = (currentValue, etalon, prevValue) => {
    const partToMatch = etalon.slice(0, currentValue.length);
    if (currentValue === partToMatch) {
      processValue(currentValue, null);
    } else {
      processValue(prevValue, 'Confirmation password should be equal to password!');
    }
  };

  const validateNextSymbol = (nextValue, prevValue, inputType) => {
    const currentSymbol = nextValue && nextValue[nextValue.length - 1];
    const isValidSymbol = currentSymbol && validateSymbol(currentSymbol);

    if (isValidSymbol) {
      processValue(nextValue, null);
    } else {
      processValue(prevValue, `"${currentSymbol}" is not allowed for ${inputType}`);
    }
  };

  const onChangeValue = e => {
    if (!e) return false;

    e.preventDefault();
    const nextValue = e.target && e.target.value;

    if (nextValue.length < value.length) {
      processValue(nextValue, null);
      return false;
    }

    validateNextSymbol(nextValue, value, type);

    if (valueToMatch) {
      validateEquality(nextValue, valueToMatch, value);
    }
  };

  return (
    <Fragment>
      {islabelShown && (
        <label htmlFor={id}>{labelContent}</label>
      )}
      <StyledInput
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
  valueToMatch: null,
};

Input.propTypes = {
  errorText: PropTypes.string,
  id: PropTypes.string,
  getValue: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  validateSymbol: PropTypes.func.isRequired,
  value: PropTypes.string,
  valueToMatch: PropTypes.string,
};

export default Input;
