import styled from 'styled-components';
import {
  marginHandler,
} from '~/_common/_helpers/styledComponents';

export const Label = styled.span`
  color: ${({ color = '#000' }) => color};
  font-size: ${({ fontSize = '12px' }) => fontSize};
  font-weight: ${({ fontWeight = '400' }) => fontWeight};
  ${props => marginHandler(props)}
`;
