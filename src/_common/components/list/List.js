import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.css';

const renderChildren = children => {
  if (!children) return null;
  if (children.map) {
    return children.map((child, index) => (
      <li
        className={styles.listItem}
        key={child.props.id || index}
      >
        {child}
      </li>
    ));
  }

  return (
    <li
      className={styles.listItem}
      key={children.props.id || 0}
    >
      {children}
    </li>
  );
};

export const List = ({ renderItem, items, children }) => (
  <ul className={styles.list}>
    {items.map((item, index) => (
      <li
        className={styles.listItem}
        key={item.id || index}
      >
        {renderItem(item)}
      </li>
    ))}
    {renderChildren(children)}
  </ul>
);

List.propTypes = {
  children: PropTypes.children,
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default List;
