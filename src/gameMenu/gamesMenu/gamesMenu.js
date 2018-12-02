import List from '~/_common/components/list';
import Menu from '~/_common/components/menu';
import React from 'react';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { navigateToGamePreview } from '~/_common/_helpers/navigationHelper';

import Game from '../game';

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
