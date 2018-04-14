import React from 'react';
import style from './list.css';

export const List = ({ clickHandler, Component, items, }) => {
  return (
    <div className={style.list}>
      {items.map((item) => (
        <Component
          clickHandler={clickHandler}
          item={item}
          key={item}
        />)
      )}
    </div>
  )
};

export default List;
