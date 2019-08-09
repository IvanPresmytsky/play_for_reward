import styled from 'styled-components';

export const StyledListItem = styled.li`
  margin-bottom: 10px;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  width: 100%;

  ${({ marginBottom }) => marginBottom && `
    margin-bottom: ${marginBottom};
  `}
`;
