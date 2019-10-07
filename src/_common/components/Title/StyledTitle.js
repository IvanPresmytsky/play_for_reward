import styled from 'styled-components';
import { titleFontSizes, titlePaddings } from './index';

export const StyledH1 = styled.h1`
  font-size: ${({ size = titleFontSizes.h1 }) => size};
  padding-bottom: ${({ padding = titlePaddings.h1 }) => padding};
`;

export const StyledH2 = styled.h2`
  font-size: ${({ size = titleFontSizes.h2 }) => size};
  padding-bottom: ${({ padding = titlePaddings.h2 }) => padding};
`;

export const StyledH3 = styled.h3`
  font-size: ${({ size = titleFontSizes.h3 }) => size};
  padding-bottom: ${({ padding = titlePaddings.h3 }) => padding};
`;

export const StyledH4 = styled.h4`
  font-size: ${({ size = titleFontSizes.h4 }) => size};
  padding-bottom: ${({ padding = titlePaddings.h4 }) => padding};
`;

export const StyledH5 = styled.h5`
  font-size: ${({ size = titleFontSizes.h5 }) => size};
  padding-bottom: ${({ padding = titlePaddings.h5 }) => padding};
`;

export const StyledH6 = styled.h6`
  font-size: ${({ size = titleFontSizes.h6 }) => size};
  padding-bottom: ${({ padding = titlePaddings.h6 }) => padding};
`;