import PropTypes from 'prop-types';
import React from 'react';

const Title = ({ text }) => (
  <h1>{text}</h1>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
