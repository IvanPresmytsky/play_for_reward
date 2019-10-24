import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styled/Flex.styled';

const Flex = ({
  alignItems,
  children,
  direction,
  height,
  justifyContent,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  width,
  wrap,
}) => (
  <S.Flex
    alignItems={alignItems}
    direction={direction}
    height={height}
    justifyContent={justifyContent}
    margin={margin}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
    padding={padding}
    paddingBottom={paddingBottom}
    paddingLeft={paddingLeft}
    paddingRight={paddingRight}
    paddingTop={paddingTop}
    width={width}
    wrap={wrap}
  >
    {children}
  </S.Flex>
);

Flex.propTypes = {
  alignItems: PropTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-end']),
  children: PropTypes.node,
  direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
  height: PropTypes.string,
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
  margin: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
  padding: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingTop: PropTypes.string,
  width: PropTypes.string,
  wrap: PropTypes.oneOf(['wrap', 'nowrap', 'wrap-reverse']),
};

export default Flex;
