import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const Checkbox = ({
  id,
  labelText,
  name,
  onChange,
}) => (
  <Fragment>
    <input
      id={id}
      name={name}
      onChange={onChange}
      type="checkbox"
    />
    <label htmlFor={id}>{labelText}</label>
  </Fragment>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;

