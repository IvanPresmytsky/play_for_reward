import React from 'react';
import PropTypes from 'prop-types';
import * as S from './StyledList';

const renderChildren = children => {
  if (!children) return null;
  if (children.map) {
    return children.map((child, index) => (
      <S.StyledListItem key={child.props.id || index}>
        {child}
      </S.StyledListItem>
    ));
  }

  return (
    <S.StyledListItem key={children.props.id || 0}>
      {children}
    </S.StyledListItem>
  );
};

export const List = ({ renderItem, items, children }) => (
  <S.StyledList>
    {items.map((item, index) => (
      <S.StyledListItem
        key={item.id || index}
      >
        {renderItem(item)}
      </S.StyledListItem>
    ))}
    {renderChildren(children)}
  </S.StyledList>
);

List.propTypes = {
  children: PropTypes.children,
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default List;
