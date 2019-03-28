import { Input } from '~/_common/components/textInput';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const validateSymbol = symbol => /[a-z0-9_()@!-]/i.test(symbol);

const PasswordInput = forwardRef(({
  errorText,
  getValue,
  id,
  labelText,
  valueToMatch,
}, ref) => (
  <Input
    errorText={errorText}
    getValue={getValue}
    id={id}
    labelText={labelText}
    ref={ref}
    type="password"
    validateSymbol={validateSymbol}
    valueToMatch={valueToMatch}
  />
));

PasswordInput.defaultProps = {
  errorText: null,
  id: null,
  labelText: null,
  valueToMatch: null,
};

PasswordInput.propTypes = {
  errorText: PropTypes.string,
  getValue: PropTypes.func.isRequired,
  id: PropTypes.string,
  labelText: PropTypes.string,
  valueToMatch: PropTypes.string,
};

export default PasswordInput;
