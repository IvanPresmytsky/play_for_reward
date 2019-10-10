import React from 'react';

import PropTypes from 'prop-types';

import * as S from './StyledLabel';

const Label = ({
  color,
  fontSize,
  fontWeight,
  marginLeft,
  marginRight,
  text,
}) => text
  ? (<S.StyledLabel
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
     {text}
    </S.StyledLabel>)
  : null;

Label.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  text: PropTypes.string,
};

export default Label;
