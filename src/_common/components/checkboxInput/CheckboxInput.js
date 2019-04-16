import PropTypes from 'prop-types';
import React, { forwardRef, useState } from 'react';

import styles from './CheckboxInput.css';

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
    <div className={styles.wrapper}>
      <input
        checked={isChecked}
        className={styles.input}
        id={id}
        name={name}
        onChange={onInputChange}
        ref={ref}
        type="checkbox"
      />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
});

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;

