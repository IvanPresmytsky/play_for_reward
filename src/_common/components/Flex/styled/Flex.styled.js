import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems = 'stretch' }) => alignItems};
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  padding: ${({
    padding = 0,
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
  }) => !!padding
    ? `${padding}`
    : `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`};
  width: ${({ width = 'auto' }) => width}
`;
