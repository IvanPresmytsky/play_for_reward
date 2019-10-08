import styled from 'styled-components';
import { titleFontSizes, titlePaddings } from './index';

export const StyledTitle = type => styled[type]`
  font-size: ${({ size = titleFontSizes[type] }) => size};
  padding-bottom: ${({ padding = titlePaddings[type] }) => padding};
`;
