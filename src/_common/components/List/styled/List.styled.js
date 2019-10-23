import styled from 'styled-components';

export default styled.ul`
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