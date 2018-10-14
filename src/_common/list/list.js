import React from 'react';
import PropTypes from 'prop-types';
import style from './list.css';

export const List = ({ clickHandler, Component, items, ...props }) => (
  <div className={style.list}>
    {items.map(item => (
      <Component
        clickHandler={clickHandler}
        data={item}
        key={item.id}
        {...props}
      />))}
  </div>
);

List.defaultProps = {
  clickHandler: null,
};

List.propTypes = {
  clickHandler: PropTypes.func,
  Component: PropTypes.node.isRequired,
  items: PropTypes.array.isRequired,
};

export default List;
