import PropTypes from 'prop-types';
import React from 'react';

import * as S from './StyledMenu';

export const Menu = ({ title, subTitle, children }) => (
  <S.StyledMenu>
    {title && (
      <h2>{title}</h2>
    )}
    {subTitle && (
      <h3>{subTitle}</h3>
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
