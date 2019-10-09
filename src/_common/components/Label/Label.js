import React from 'react';

import PropTypes from 'prop-types';

import * as S from './StyledLabel';

const Label = ({
  color,
  fontSize,
  fontWeight,
  text,
}) => text
  ? (<S.StyledLabel
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
     {text}
    </S.StyledLabel>)
  : null;

Label.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  text: PropTypes.string,
};

export default Label;
