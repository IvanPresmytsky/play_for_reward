import classnames from 'classnames';
import React from 'react';
import style from './button.css';

export const Button = ({
  clickHandler,
  id,
  mods,
  text,
}) => {
  const modsClasses = (mods && mods.length && mods.map(mod => style[`button_${mod}`])) || '';
  const buttonClasses = classnames(style.button, ...modsClasses);

  return (
    <button
      className={buttonClasses}
      id={id}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
