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

export default borderHandler;
