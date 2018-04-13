import React from 'react';
import history from '../store/history';
import Game from './game';
import style from './gamesList.css';

export const GamesList = ({ games }) => {
  const onGameClick = (e) => {
    e.preventDefault();
    const gameId = e.target && e.target.id;

    history.push(`/math/${gameId}`);
  }

  return (
    <div className={style.gamesList}>
      {games.map((game) => (
        <Game
          clickHandler={onGameClick}
          game={game}
          key={game}
        />)
      )}
    </div>
  )
};

export default GamesList;
