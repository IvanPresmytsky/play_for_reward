import React from 'react';
import PropTypes from 'prop-types';

import Label from '~/_common/components/Label';

export const StyledLabel = ({ text }) => (
  <Label
    color="green"
    fontSize="40px"
    fontWeight="bold"
    marginRight="2%"
    text={text}
  />
);

StyledLabel.propTypes = {
  text: PropTypes.string,
};

export default StyledLabel;