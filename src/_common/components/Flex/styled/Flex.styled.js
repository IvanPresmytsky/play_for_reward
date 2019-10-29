import styled from 'styled-components';

const borderHandler = ({
  border,
  borderType,
  borderWidth,
  borderStyle,
  borderColor,
}) => {
  if (!border && !borderWidth) return null;
  const borderKey = borderType ? `border-${borderType}` : 'border'

  return !!border
    ? `${borderKey}: ${border};`
    : `${borderKey}: ${borderWidth} ${borderStyle} ${borderColor};`
};

export const Flex = styled.div`
  align-items: ${({ alignItems = 'stretch' }) => alignItems};
  ${props => borderHandler(props)}
  border-radius: ${({
   borderRadius = 0,
  }) => borderRadius};
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
  height: ${({ height = 'auto' }) => height};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  margin: ${({
    margin = 0,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
  }) => !!margin
    ? `${margin}`
    : `${marginTop} ${marginRight} ${marginBottom} ${marginLeft}`};
  padding: ${({
    padding = 0,
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
  }) => !!padding
    ? `${padding}`
    : `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`};
  width: ${({ width = 'auto' }) => width};
`;
