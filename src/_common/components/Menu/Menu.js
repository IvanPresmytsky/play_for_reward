import React from 'react';

import PropTypes from 'prop-types';

import { Title, titleTypes } from '~/_common/components/Title';
import * as S from './StyledMenu';

export const Menu = ({ title, subTitle, children }) => (
  <S.StyledMenu>
    {title && (
      <Title text={title} type={titleTypes.h2}/>
    )}
    {subTitle && (
      <Title text={subTitle} type={titleTypes.h3} />
    )}
    {children}
  </S.StyledMenu>
);

Menu.defaultProps = {
  children: null,
  subTitle: null,
  title: null,
};

Menu.propTypes = {
  children: PropTypes.array,
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

export default Menu;
