import { Input } from '~/_common/components/input';
import React from 'react';
import PropTypes from 'prop-types'

const NameInput = ({ id, labelText }) => (
  <Input
    id={id}
    labelText={labelText}
    type="name"
  />
);

NameInput.defaultProps = {
  id: null,
  labelText: null,
};
  
NameInput.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string,
};

export default NameInput;
