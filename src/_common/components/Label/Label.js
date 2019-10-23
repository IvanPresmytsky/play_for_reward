import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styled/Label.styled';

const Label = ({
  color,
  fontSize,
  fontWeight,
  marginLeft,
  marginRight,
  text,
}) => text
  ? (<S.Label
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
     {text}
    </S.Label>)
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
