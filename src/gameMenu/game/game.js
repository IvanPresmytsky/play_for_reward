import PropTypes from 'prop-types';
import React from 'react';
import Button from '~/_common/components/button';

import style from './game.css';

export const Game = ({ data, clickHandler }) => (
  <div className={style.game}>
    <Button
      className={style.gameBtn}
      id={data.id}
      clickHandler={clickHandler}
      text={data.name}
    />
  </div>
);

Game.defaultProps = {
  clickHandler: null,
};

Game.propTypes = {
  data: PropTypes.object.isRequired,
  clickHandler: PropTypes.func,
};

export default Game;
