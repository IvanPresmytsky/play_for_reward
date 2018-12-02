import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import buttonMods from './mods';
import styles from './button.css';

export const Button = ({
  clickHandler,
  id,
  mods,
  text,
}) => {
  const modsClasses = mods.map(mod => styles[`button_${mod}`]);
  const buttonClasses = classnames(styles.button, ...modsClasses);

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

Button.defaultProps = {
  clickHandler: e => e.preventDefault(),
  id: null,
  mods: [],
}

Button.propTypes = {
  clickHandler: PropTypes.func,
  id: PropTypes.string,
  mods: PropTypes.oneOf(Object.values(buttonMods)),
  text: PropTypes.string.isRequired,
}

export default Button;
