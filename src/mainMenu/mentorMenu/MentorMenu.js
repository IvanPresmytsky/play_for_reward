import Button from '~/_common/components/Button';
import Menu from '~/_common/components/menu';
import React from 'react';
import { authorizationMethods, userTypes } from '~/_common/constants';

import {
  navigateToAuthorization,
  navigateToMainMenu,
  navigateToPlayers,
} from '~/_common/_helpers/navigationHelper';

const MentorMenu = () => {
  const { LOGIN } = authorizationMethods;
  const { MENTOR } = userTypes;

  const onSettingsClick = () => navigateToAuthorization(LOGIN, MENTOR);
  const onPlayersClick = () => navigateToPlayers();
  const onSignOutClick = () => navigateToMainMenu();

  return (
    <Menu
      title="Mentor menu"
    >
      <Button clickHandler={onSettingsClick}>
        Accaunt settings
      </Button>
      <Button clickHandler={onPlayersClick}>
        Players list
      </Button>
      <Button clickHandler={onSignOutClick}>
        Sign out
      </Button>
    </Menu>
  );
};

export default MentorMenu;
