import List from '~/_common/components/List';
import Menu from '~/_common/components/Menu';
import PropTypes from 'prop-types';
import React from 'react';
import { authorizationMethods, userTypes } from '~/_common/constants';
import { Button, buttonMods } from '~/_common/components/Button';
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
        items={players}
        renderItem={props => (
          <Player clickHandler={onPlayerClick} {...props} />
        )}
      >
        <Button
          clickHandler={onPlayerRegisterClick}
          id="addPlayer"
          modifiers={[buttonMods.RESPONSIVE_X]}
        >
          Add a player
        </Button>
        <Button
          clickHandler={onBackClick}
          id="back"
          modifiers={[buttonMods.RESPONSIVE_X]}
        >
          Back
        </Button>
      </List>
    </Menu>
  );
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
};

export default PlayerList;
