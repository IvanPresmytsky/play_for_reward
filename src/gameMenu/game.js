import React from 'react';
import Button from '../common/button/button';
import style from './game.css';

export const Game = ({ game, clickHandler }) => (
  <div className={style.game}>
    <Button
      className={style.gameBtn}
      id={game}
      clickHandler={clickHandler}
      text={game}
    />
  </div>
);

export default Game;
