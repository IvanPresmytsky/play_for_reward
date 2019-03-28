import { Input } from '~/_common/components/textInput';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const validateSymbol = symbol => (/[a-z0-9_()@!-]/i).test(symbol);

const NameInput = forwardRef(({ id, labelText, getValue }, ref) => (
  <Input
    id={id}
    getValue={getValue}
    labelText={labelText}
    ref={ref}
    type="name"
    validateSymbol={validateSymbol}
  />
));

NameInput.defaultProps = {
  id: null,
  labelText: null,
};

NameInput.propTypes = {
  id: PropTypes.string,
  getValue: PropTypes.func.isRequired,
  labelText: PropTypes.string,
};

export default NameInput;
