import React from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCurrentGame } from './actions/menuActions';
import GameList from './gamesList';
import history from '../store/history';
import Menu from './common/menu/menu';

import style from './gamesMenu.css';

export const GamesMenu = ({ ...props }) => {
  const onGameClick = (e) => {
    e.preventDefault();
    const gameId = e.target && e.target.id;
    props.setCurrentGame(gameId);
    history.push(`/${props.currentCategory}/${gameId}`);
  };

  return (
    <Menu
      subTitle="Choose the game"
      title="Games list"
    >
      <GameList
        clickHandler={onGameClick}
        games={props.games}
      />
    </Menu>
  );
};

const mapStateToProps = state => ({
  currentCategory: state.menu.currentCategory,
  currentGame: state.menu.currentGame,
  games: state.games.games,
});

const mapDispatchToProps = dispatch => ({
  setCurrentGame: bindActionCreators(setCurrentGame, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GamesMenu));
