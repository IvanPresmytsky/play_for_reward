import styled from 'styled-components';
import {
  marginHandler,
} from '~/_common/_helpers/styledComponents';
export default styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  width: 100%;
  ${props => marginHandler(props)}
`;