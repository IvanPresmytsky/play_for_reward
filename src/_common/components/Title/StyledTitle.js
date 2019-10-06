import styled from 'styled-components';

export const StyledH1 = styled.h1`
  font-size: ${({ size = '32px' }) => size};
  padding-bottom: ${({ padding = '16px' }) => padding};
`;

export const StyledH2 = styled.h2`
  font-size: ${({ size = '24px' }) => size};
  padding-bottom: ${({ padding = '14px' }) => padding};
`;

export const StyledH3 = styled.h3`
  font-size: ${({ size = '20px' }) => size};
  padding-bottom: ${({ padding = '12px' }) => padding};
`;

export const StyledH4 = styled.h4`
  font-size: ${({ size = '18px' }) => size};
  padding-bottom: ${({ padding = '10px' }) => padding};
`;

export const StyledH5 = styled.h5`
  font-size: ${({ size = '16px' }) => size};
  padding-bottom: ${({ padding = '8px' }) => padding};
`;

export const StyledH6 = styled.h6`
  font-size: ${({ size = '14px' }) => size};
  padding-bottom: ${({ padding = '6px' }) => padding};
`;