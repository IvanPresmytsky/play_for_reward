import React from 'react';
import Button from '../../common/button/button';
import style from './game.css';

export const Game = ({ item, clickHandler }) => (
  <div className={style.game}>
    <Button
      className={style.gameBtn}
      id={item}
      clickHandler={clickHandler}
      text={item}
    />
  </div>
);

export default Game;
