import React from 'react';
import Button from '../../common/button/button';
import style from './category.css';

export const Category = ({ item, clickHandler }) => (
  <div className={style.category}>
    <Button
      className={style.categoryBtn}
      id={item}
      clickHandler={clickHandler}
      text={item}
    />
  </div>
);

export default Category;
