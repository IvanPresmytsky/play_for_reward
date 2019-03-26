import List from '~/_common/components/list';
import Menu from '~/_common/components/menu';
import PropTypes from 'prop-types';
import React from 'react';

import { navigateToPlayer } from '~/_common/_helpers/navigationHelper';

import Player from '../player';

export const PlayerList = ({ players }) => {
  const onPlayerClick = e => {
    e.preventDefault();
    const id = e.target && e.target.id;
    navigateToPlayer(id);
  };

  return (
    <Menu
      subTitle="Choose the player"
      title="Players list"
    >
      <List
        clickHandler={onPlayerClick}
        Component={Player}
        items={players}
      />
    </Menu>
  );
};

PlayerList.PropTypes = {
  players: PropTypes.array.isRequired,
};

export default PlayerList;
