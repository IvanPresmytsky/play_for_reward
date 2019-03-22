import PropTypes from 'prop-types';
import React from 'react';

import styles from './Title.css';

const Title = ({ text }) => (
  <h1>{text}</h1>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
