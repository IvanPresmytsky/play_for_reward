import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.css';

export const List = ({ renderItem, items }) => (
  <ul className={styles.list}>
    {items.map((item, index) => (
      <li
        className={styles.listItem}
        key={item.id || index}
      >
        {renderItem(item)}
      </li>
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default List;
