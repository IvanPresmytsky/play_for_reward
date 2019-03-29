import PropTypes from 'prop-types';
import React from 'react';
import Checkbox from '~/_common/components/checkboxInput';

import styles from './Card.css';

const Card = ({
  checked,
  id,
  labelText,
  name,
  onChange,
}) => (
  <div className={styles.header}>
    <Checkbox
      checked={checked}
      id={id}
      labelText={labelText}
      name={name}
      onChange={onChange}
    />
    <a href="#">Expand</a>
  </div>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Card;

