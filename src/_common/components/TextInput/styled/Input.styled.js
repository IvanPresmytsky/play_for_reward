import styled from 'styled-components';

export default styled.input`
  border: 2px solid green;
  border-radius: 5px;
  padding: 8px;
  outline: none;
  width: 100%

  ${({ error }) => error && `
    border-color: red;
  `}
`;
