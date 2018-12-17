import { Input } from '~/_common/components/input';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const validateSymbol = symbol => (/[a-z0-9_()@!-]/i).test(symbol);

const NameInput = ({ id, labelText }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const onChangeValue = e => {
    if (!e) return false;

    e.preventDefault();
    const nextValue = e.target && e.target.value;

    if (nextValue.length < value.length) {
      setValue(nextValue);
      setError(null);
      return false;
    }

    const currentSymbol = nextValue && nextValue[nextValue.length - 1];
    const isValidSymbol = currentSymbol && validateSymbol(currentSymbol);

    if (isValidSymbol) {
      setValue(nextValue);
      setError(null);
    } else {
      setValue(value);
      setError(`"${currentSymbol}" is not allowed for username`);
    }
  };

  return (
    <Input
      errorText={error}
      id={id}
      labelText={labelText}
      type="name"
      value={value}
      onChange={onChangeValue}
    />
  );
};

NameInput.defaultProps = {
  id: null,
  labelText: null,
};
  
NameInput.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string,
};

export default NameInput;
