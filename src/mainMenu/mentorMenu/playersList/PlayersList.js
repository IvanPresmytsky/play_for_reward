import Button from '~/_common/components/button';
import List from '~/_common/components/list';
import Menu from '~/_common/components/menu';
import PropTypes from 'prop-types';
import React from 'react';
import { userTypes } from '~/_common/constants';
import { navigateToPlayerConfiguration, navigateToUserMenu } from '~/_common/_helpers/navigationHelper';

import Player from '../player';

export const PlayerList = ({ players }) => {
  const onPlayerClick = e => {
    e.preventDefault();
    const id = e.target && e.target.id;
    navigateToPlayerConfiguration(id);
  };

  const onBackClick = () => navigateToUserMenu(userTypes.MENTOR);

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
      <Button
        clickHandler={onBackClick}
        text="Back"
      />
    </Menu>
  );
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
};

export default PlayerList;
