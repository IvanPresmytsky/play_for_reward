import { Input } from '~/_common/components/input';
import React from 'react';
import PropTypes from 'prop-types'

const PasswordInput = ({ id, labelText }) => (
  <Input
    id={id}
    labelText={labelText}
    type="password"
  />
);

PasswordInput.defaultProps = {
  id: null,
  labelText: null,
};
  
PasswordInput.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string,
};

export default PasswordInput;
