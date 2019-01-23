import { Input } from '~/_common/components/input';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const validateSymbol = symbol => /[a-z0-9_()@!-]/i.test(symbol);

const PasswordInput = forwardRef(({ id, labelText, getValue }, ref) => (
  <Input
    id={id}
    getValue={getValue}
    labelText={labelText}
    ref={ref}
    type="password"
    validateSymbol={validateSymbol}
  />
));

PasswordInput.defaultProps = {
  id: null,
  labelText: null,
};

PasswordInput.propTypes = {
  id: PropTypes.string,
  getValue: PropTypes.func.isRequired,
  labelText: PropTypes.string,
};

export default PasswordInput;
