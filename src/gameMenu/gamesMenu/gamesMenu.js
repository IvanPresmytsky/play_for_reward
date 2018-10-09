import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { navigateToGamePreview } from '../../common/_helpers/navigationHelper';
import Menu from '../common/menu/menu';
import List from '../common/list/list';
import Game from '../game/game';

export const GamesMenu = ({ games, match }) => {
  const onGameClick = e => {
    e.preventDefault();
    const game = e.target && e.target.id;
    const { category } = match.params;

    navigateToGamePreview(category, game);
  };

  return (
    <Menu
      subTitle="Choose the game"
      title="Games list"
    >
      <List
        clickHandler={onGameClick}
        Component={Game}
        items={games}
      />
    </Menu>
  );
};

const mapStateToProps = state => ({
  games: state.menu.games,
});

export default withRouter(connect(mapStateToProps, null)(GamesMenu));
