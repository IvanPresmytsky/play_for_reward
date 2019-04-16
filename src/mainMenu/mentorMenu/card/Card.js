import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import Checkbox from '~/_common/components/checkboxInput';

import CardOptions from '../cardOptions';
import styles from './Card.css';

const Card = ({
  checked,
  id,
  labelText,
  name,
  onChange,
}) => {
  const [isExpanded, setExpanded] = useState(false);

  const onExpandedClick = e => {
    e.preventDefault();
    setExpanded(!isExpanded);
  };

  return (
    <Fragment>
      <div className={styles.header}>
        <Checkbox
          checked={checked}
          id={id}
          labelText={labelText}
          name={name}
          onChange={onChange}
        />
        <a href="#" onClick={onExpandedClick}>
          {isExpanded ? 'Hide' : 'Expand'}
        </a>
      </div>
      {isExpanded && (
        <CardOptions />
      )}
    </Fragment>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Card;

