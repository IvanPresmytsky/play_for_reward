import React from 'react';
import Game from './game';
import style from './gamesList.css';

export const GamesList = ({ games, clickHandler }) => {
  return (
    <div className={style.gamesList}>
      {games.map((game) => (
        <Game
          clickHandler={clickHandler}
          game={game}
          key={game}
        />)
      )}
    </div>
  )
};

export default GamesList;
