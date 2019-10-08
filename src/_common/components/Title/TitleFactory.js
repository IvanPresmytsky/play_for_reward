import React from 'react';

import PropTypes from 'prop-types';

import titleTypes from './constants/titleTypes.constants';
import * as S from './StyledTitle';

const TitleFactory = ({
  fontSize,
  paddingBottom,
  text,
  type = titleTypes.h1,
}) => {
  const StyledTitle = S.StyledTitle(type);

  return (
    <StyledTitle
      fontSize={fontSize}
      paddingBottom={paddingBottom}
    >
      {text}
    </StyledTitle>
  );
};

TitleFactory.propTypes = {
  fontSize: PropTypes.string,
  paddingBottom: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(titleTypes)),
};

export default TitleFactory;
