import React from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCurrentGame } from '../actions/menuActions';
import history from '../../store/history';
import Menu from '../common/menu/menu';
import List from '../common/list/list';
import Game from '../game/game';

export const GamesMenu = ({ ...props }) => {
  const onGameClick = (e) => {
    e.preventDefault();
    const gameId = e.target && e.target.id;
    props.setCurrentGame(gameId);
    history.push(`/games/${props.currentCategory.name}/${gameId}/preview`);
  };

  return (
    <Menu
      subTitle="Choose the game"
      title="Games list"
    >
      <List
        clickHandler={onGameClick}
        Component={Game}
        items={props.games}
      />
    </Menu>
  );
};

const mapStateToProps = state => ({
  currentCategory: state.menu.currentCategory,
  currentGame: state.menu.currentGame,
  games: state.menu.games,
});

const mapDispatchToProps = dispatch => ({
  setCurrentGame: bindActionCreators(setCurrentGame, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GamesMenu));
