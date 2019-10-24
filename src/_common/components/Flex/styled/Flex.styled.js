import styled from 'styled-components';

export const Flex = styled.div`
  align-items: ${({ alignItems = 'stretch' }) => alignItems};
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
  height: ${({ height = 'auto' }) => height};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  margin: ${({
    margin = 0,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
  }) => !!margin
    ? `${margin}`
    : `${marginTop} ${marginRight} ${marginBottom} ${marginLeft}`};
  padding: ${({
    padding = 0,
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
  }) => !!padding
    ? `${padding}`
    : `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`};
  width: ${({ width = 'auto' }) => width};
`;
