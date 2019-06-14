import Button from '~/_common/components/Button';
import List from '~/_common/components/list';
import Menu from '~/_common/components/menu';
import PropTypes from 'prop-types';
import React from 'react';
import { authorizationMethods, userTypes } from '~/_common/constants';
import {
  navigateToAuthorization,
  navigateToPlayerConfiguration,
  navigateToUserMenu,
} from '~/_common/_helpers/navigationHelper';

import Player from '../player';

export const PlayerList = ({ players, setCurrentPlayer }) => {
  const onPlayerClick = e => {
    e.preventDefault();
    const id = e.target && e.target.id;
    setCurrentPlayer(id);
    navigateToPlayerConfiguration(id);
  };

  const onBackClick = () => navigateToUserMenu(userTypes.MENTOR);
  const onPlayerRegisterClick = () => navigateToAuthorization(authorizationMethods.REGISTER, userTypes.PLAYER);

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
      <Button clickHandler={onPlayerRegisterClick}>
        Add a player
      </Button>
      <Button clickHandler={onBackClick}>
        Back
      </Button>
    </Menu>
  );
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
};

export default PlayerList;
