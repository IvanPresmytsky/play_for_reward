import styled from 'styled-components';
import { titleFontSizes, titlePaddings } from './index';

export const StyledTitle = type => styled[type]`
  font-size: ${({ fontSize = titleFontSizes[type] }) => fontSize};
  padding-bottom: ${({ paddingBottom = titlePaddings[type] }) => paddingBottom};
`;
