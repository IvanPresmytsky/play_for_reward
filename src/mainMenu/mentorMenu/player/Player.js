import React from 'react';
import PropTypes from 'prop-types';
import { Button, buttonMods } from '~/_common/components/Button';
import style from './Player.css';

export const Player = ({ id, name, clickHandler }) => (
  <div className={style.player}>
    <Button
      id={id}
      clickHandler={clickHandler}
      modifiers={[buttonMods.RESPONSIVE]}
    >
      {name}
    </Button>
  </div>
);

Player.defaultProps = {
  clickHandler: null,
};

Player.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

export default Player;

