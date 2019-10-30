const marginHandler = ({
  margin = 0,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0,
}) => {
  if (
    !margin
    && !marginTop
    && !marginRight
    && !marginBottom
    && !marginLeft
  ) return null;

  return `margin: ${!!margin
    ? margin
    : `${marginTop} ${marginRight} ${marginBottom} ${marginLeft}
  `};`
};

export default marginHandler;
