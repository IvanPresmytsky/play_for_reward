import List from '~/_common/components/List';
import Menu from '~/_common/components/Menu';
import PropTypes from 'prop-types';
import React from 'react';

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
        items={games}
        renderItem={props => (
          <Game clickHandler={onGameClick} {...props} />
        )}
      />
    </Menu>
  );
};

GamesMenu.propTypes = {
  games: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

export default GamesMenu;
