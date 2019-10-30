const paddingHandler = ({
  padding = 0,
  paddingTop = 0,
  paddingRight = 0,
  paddingBottom = 0,
  paddingLeft = 0,
}) => {
  if (
    !padding
    && !paddingTop
    && !paddingRight
    && !paddingBottom
    && !paddingLeft
  ) return null;

  return `padding: ${!!padding
    ? padding
    : `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}
  `};`
};

export default paddingHandler;
