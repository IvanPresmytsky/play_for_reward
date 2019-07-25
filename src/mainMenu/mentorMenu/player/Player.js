import React from 'react';
import PropTypes from 'prop-types';
import { Button, buttonMods } from '~/_common/components/Button';
import style from './Player.css';

export const Player = ({ data, clickHandler }) => (
  <div className={style.player}>
    <Button
      id={data.id}
      clickHandler={clickHandler}
      modifiers={[buttonMods.RESPONSIVE]}
    >
      {data.name}
    </Button>
  </div>
);

Player.defaultProps = {
  clickHandler: null,
};

Player.propTypes = {
  data: PropTypes.object.isRequired,
  clickHandler: PropTypes.func,
};

export default Player;

