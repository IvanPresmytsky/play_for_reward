import styled from 'styled-components';

export const StyledMainHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.mainHeaderBackground};
`;