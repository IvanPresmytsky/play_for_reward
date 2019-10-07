import React from 'react';

import PropTypes from 'prop-types';

import titleTypes from './constants/titleTypes.constants'; 
import * as S from './StyledTitle';

const types = {
  [titleTypes.h1]: props => <S.StyledH1 {...props}>{props.text}</S.StyledH1>,
  [titleTypes.h2]: props => <S.StyledH2 {...props}>{props.text}</S.StyledH2>,
  [titleTypes.h3]: props => <S.StyledH3 {...props}>{props.text}</S.StyledH3>,
  [titleTypes.h4]: props => <S.StyledH4 {...props}>{props.text}</S.StyledH4>,
  [titleTypes.h5]: props => <S.StyledH5 {...props}>{props.text}</S.StyledH5>,
  [titleTypes.h6]: props => <S.StyledH6 {...props}>{props.text}</S.StyledH6>,
};

const TitleFactory = ({
  fontSize,
  paddingBottom,
  text,
  type = titleTypes.h1,
}) => types[type]({
  fontSize,
  paddingBottom,
  text
});

TitleFactory.propTypes = {
  fontSize: PropTypes.string,
  paddingBottom: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(titleTypes)),
};

export default TitleFactory;
