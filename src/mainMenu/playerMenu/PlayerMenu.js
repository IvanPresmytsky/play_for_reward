import Menu from '~/_common/components/menu';
import React from 'react';
import { authorizationMethods, userTypes } from '~/_common/constants';
import { Button, buttonMods } from '~/_common/components/Button';

import {
  navigateToAuthorization,
  navigateToGames,
  navigateToMainMenu,
} from '~/_common/_helpers/navigationHelper';

const PlayerMenu = () => {
  const { LOGIN } = authorizationMethods;
  const { PLAYER } = userTypes;

  const onAvalableGamesClick = () => navigateToGames();
  const onPlayerLoginClick = () => navigateToAuthorization(LOGIN, PLAYER);
  const onSignOutClick = () => navigateToMainMenu();

  return (
    <Menu
      title="Player menu"
    >
      <Button
        clickHandler={onPlayerLoginClick}
        modifiers={[buttonMods.RESPONSIVE]}
      >
        Accaunt settings
      </Button>
      <Button
        clickHandler={onAvalableGamesClick}
        modifiers={[buttonMods.RESPONSIVE]}
      >
        Available games
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

export default PlayerMenu;
