import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import Flex from '~/_common/components/Flex';

import * as S from './styled/Input.styled';

const Checkbox = forwardRef(({
  checked,
  id,
  labelText,
  name,
  onChange,
}, ref) => {
  const [isChecked, setChecked] = useState(checked);
  const onInputChange = e => {
    setChecked(!isChecked);
    onChange(e);
  };

  return (
    <Flex width="100%">
      <S.Input
        checked={isChecked}
        id={id}
        marginRight="5px"
        name={name}
        onChange={onInputChange}
        ref={ref}
        type="checkbox"
      />
      <label htmlFor={id}>{labelText}</label>
    </Flex>
  );
});

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;

