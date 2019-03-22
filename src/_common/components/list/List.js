import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.css';

export const List = ({ Component, items, ...props }) => (
  <ul className={styles.list}>
    {items.map((item, index) => (
      <li
        className={styles.listItem}
        key={item.id || index}
      >
          <Component
            data={item}
            {...props}
          />
      </li>
    ))}
  </ul>
);

List.propTypes = {
  Component: PropTypes.node.isRequired,
  items: PropTypes.array.isRequired,
};

export default List;
