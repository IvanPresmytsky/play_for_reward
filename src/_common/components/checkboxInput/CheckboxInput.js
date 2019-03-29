import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import styles from './CheckboxInput.css';

const Checkbox = forwardRef(({
  checked,
  id,
  labelText,
  name,
  onChange,
}, ref) => (
  <div className={styles.wrapper}>
    <input
      checked={checked}
      className={styles.input}
      id={id}
      name={name}
      onChange={onChange}
      ref={ref}
      type="checkbox"
    />
    <label htmlFor={id}>{labelText}</label>
  </div>
));

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;

