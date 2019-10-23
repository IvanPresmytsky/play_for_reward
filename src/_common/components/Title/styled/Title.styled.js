import styled from 'styled-components';
import { titleFontSizes, titlePaddings } from '..';

export const Title = type => styled[type]`
  font-size: ${({ fontSize = titleFontSizes[type] }) => fontSize};
  padding-bottom: ${({ paddingBottom = titlePaddings[type] }) => paddingBottom};
`;
