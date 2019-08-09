import styled from 'styled-components';

export const StyledLabel = styled.label`
  color: green;

  ${({ error }) => error && `
    color: red;
  `}
`;

export const StyledInput = styled.input`
  border: 2px solid green;
  border-radius: 5px;
  padding: 8px;
  outline: none;
  width: 100%

  ${({ error }) => error && `
    border-color: red;
  `}
`;
