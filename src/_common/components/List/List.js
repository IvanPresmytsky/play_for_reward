import React from 'react';
import PropTypes from 'prop-types';
import StyledList from './StyledList';

const renderChildren = children => {
  if (!children) return null;
  if (children.map) {
    return children.map((child, index) => (
      <li key={child.props.id || index}>
        {child}
      </li>
    ));
  }

  return (
    <li key={children.props.id || 0}>
      {children}
    </li>
  );
};

export const List = ({ renderItem, items, children }) => (
  <StyledList>
    {items.map((item, index) => (
      <li
        key={item.id || index}
      >
        {renderItem(item)}
      </li>
    ))}
    {renderChildren(children)}
  </StyledList>
);

List.propTypes = {
  children: PropTypes.children,
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default List;
