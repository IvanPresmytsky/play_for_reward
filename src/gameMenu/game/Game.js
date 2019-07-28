import PropTypes from 'prop-types';
import React from 'react';
import { Button, buttonMods } from '~/_common/components/Button';

import style from './Game.css';

export const Game = ({ id, name, clickHandler }) => (
  <div className={style.game}>
    <Button
      id={id}
      clickHandler={clickHandler}
      modifiers={[buttonMods.RESPONSIVE]}
    >
      {name}
    </Button>
  </div>
);

Game.defaultProps = {
  clickHandler: null,
};

Game.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

export default Game;
