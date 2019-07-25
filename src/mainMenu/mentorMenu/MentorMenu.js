import Menu from '~/_common/components/menu';
import React from 'react';
import { authorizationMethods, userTypes } from '~/_common/constants';
import { Button, buttonMods } from '~/_common/components/Button';

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
      <Button
        clickHandler={onSettingsClick}
        modifiers={[buttonMods.RESPONSIVE]}
      >
        Accaunt settings
      </Button>
      <Button
        clickHandler={onPlayersClick}
        modifiers={[buttonMods.RESPONSIVE]}
      >
        Players list
      </Button>
      <Button
        clickHandler={onSignOutClick}
        modifiers={[buttonMods.RESPONSIVE]}
      >
        Sign out
      </Button>
    </Menu>
  );
};

export default MentorMenu;
