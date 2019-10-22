import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styled/Flex.styled';

const Flex = ({
  alignItems,
  children,
  direction,
  justifyContent,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
}) => (
  <S.Flex
    alignItems={alignItems}
    direction={direction}
    justifyContent={justifyContent}
    padding={padding}
    paddingBottom={paddingBottom}
    paddingLeft={paddingLeft}
    paddingRight={paddingRight}
    paddingTop={paddingTop}
  >
    {children}
  </S.Flex>
);

Flex.propTypes = {
  alignItems: PropTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-end']),
  children: PropTypes.node,
  direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
  padding: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingTop: PropTypes.string,
}

export default Flex;
