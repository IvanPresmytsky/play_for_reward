import React from 'react';
import Button from '~/_common/button';
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

export default Game;
