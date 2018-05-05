import React from 'react';
import Button from '../../common/button/button';
import style from './category.css';

export const Category = ({ data, clickHandler }) => (
  <div className={style.category}>
    <Button
      className={style.categoryBtn}
      id={data.id}
      clickHandler={clickHandler}
      text={data.name}
    />
  </div>
);

export default Category;
