import React from 'react';
import style from './menu.css';

export const Menu = ({ title, subTitle, ...props }) => {

  return (
    <div className={style.menu}>
      <h2 className={style.title}>{title}</h2>
      <h3 className={style.subTitle}>{subTitle}</h3>
      {props.children}
    </div>
  );
};

export default Menu;
