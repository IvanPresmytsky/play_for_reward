import Button from '~/_common/components/button';
import Menu from '~/_common/components/menu';
import React from 'react';
import { authorizationMethods, userTypes } from '~/_common/constants';

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
        text="Accaunt settings"
      />
      <Button
        clickHandler={onAvalableGamesClick}
        text="Available games"
      />
      <Button
        clickHandler={onSignOutClick}
        text="Sign out"
      />
    </Menu>
  );
};

export default PlayerMenu;
