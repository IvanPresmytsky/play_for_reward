import React from 'react';
import style from './list.css';

export const List = ({ clickHandler, Component, items }) => (
    <div className={style.list}>
      {items.map(item => (
        <Component
          clickHandler={clickHandler}
          data={item}
          key={item.id}
        />))}
    </div>
);

export default List;
