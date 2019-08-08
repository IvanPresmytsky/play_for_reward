import React from 'react';
import PropTypes from 'prop-types';
import * as S from './StyledList';

const renderListItem = (item, index) => (
  <S.StyledListItem key={(item.props && item.props.id) || index}>
    {item}
  </S.StyledListItem>
);

const renderChildren = children => {
  if (!children) return null;
  if (children.map) return children.map((child, index) => renderListItem(child, index));
  return renderListItem(children, 0);
};

export const List = ({ renderItem, items, children }) => (
  <S.StyledList>
    {items.map((item, index) => renderListItem(renderItem(item), index))}
    {renderChildren(children)}
  </S.StyledList>
);

List.defaultProps = {
  items: [],
  renderItem: () => null,
};

List.propTypes = {
  children: PropTypes.func,
  items: PropTypes.array,
  renderItem: PropTypes.func,
};

export default List;
