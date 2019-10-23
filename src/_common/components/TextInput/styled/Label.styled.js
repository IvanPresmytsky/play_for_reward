import styled from 'styled-components';

export default styled.label`
  color: green;

  ${({ error }) => error && `
    color: red;
  `}
`;
