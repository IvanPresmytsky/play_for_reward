import { Input } from '~/_common/components/input';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const validateInput = (value) => value.test(/[a-z, A-Z, 0-9]/i) && value;

const NameInput = ({ id, labelText }) => {
  const [value, setValue] = useState('');

  const onChangeValue = e => {
    debugger;
    if(!(e && e.target)) return false;
    const x = e.target.value;
    setValue(x);
  };

  return (
    <Input
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
