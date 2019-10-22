import React from 'react';

import PropTypes from 'prop-types';

import { Title, titleTypes } from '~/_common/components/Title';
import Flex from '~/_common/components/Flex'

export const Menu = ({ title, subTitle, children }) => (
  <Flex alignItems="center" direction="column" padding="10px">
    {title && (
      <Title text={title} type={titleTypes.h2}/>
    )}
    {subTitle && (
      <Title text={subTitle} type={titleTypes.h3} />
    )}
    {children}
  </Flex>
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
