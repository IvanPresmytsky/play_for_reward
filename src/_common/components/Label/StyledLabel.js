import styled from 'styled-components';

export const StyledLabel = styled.span`
  color: ${({ color = '#000' }) => color};
  font-size: ${({ fontSize = '12px' }) => fontSize};
  font-weight: ${({ fontWeight = '400' }) => fontWeight};
  margin-left: ${({ marginLeft = 0 }) => marginLeft};
  margin-right: ${({ marginRight = 0 }) => marginRight};
`;
