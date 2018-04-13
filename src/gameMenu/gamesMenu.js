import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import GameList from './gamesList';

import style from './gamesMenu.css';

export const GamesMenu = ({ ...props }) => {

  return (
    <div className={style.gamesMenu}>
      <h2 className={style.title}>Games list</h2>
      <h3 className={style.subTitle}>Choose the game</h3>
      <GameList games={props.games} />
    </div>
  );
};

const mapStateToProps = state => ({
  games: state.games.games,
});

export default withRouter(connect(mapStateToProps, null)(GamesMenu));
