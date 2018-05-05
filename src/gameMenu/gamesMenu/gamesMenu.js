import React from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCurrentGame } from '../actions/menuActions';
import { navigateToGamePreview } from '../../common/_helpers/navigationHelper';
import Menu from '../common/menu/menu';
import List from '../common/list/list';
import Game from '../game/game';

export const GamesMenu = ({ ...props }) => {
  const onGameClick = (e) => {
    e.preventDefault();
    const gameId = e.target && e.target.id;
    const categoryId = props.currentCategory.id;
    props.setCurrentGame(gameId);
    navigateToGamePreview(categoryId, gameId);
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
