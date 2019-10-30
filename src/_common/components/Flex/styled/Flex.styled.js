import styled from 'styled-components';
import {
  borderRadiusHandler,
  borderHandler,
  heightHandler,
  marginHandler,
  paddingHandler,
  widthHandler,
} from '~/_common/_helpers/styledComponents';

export const Flex = styled.div`
  align-items: ${({ alignItems = 'stretch' }) => alignItems};
  ${props => borderHandler(props)}
  ${({ borderRadius }) => borderRadiusHandler(borderRadius)}
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
  ${({ height }) => heightHandler(height)}
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  ${props => marginHandler(props)}
  ${props => paddingHandler(props)}
  ${({ width }) => widthHandler(width)}
`;
