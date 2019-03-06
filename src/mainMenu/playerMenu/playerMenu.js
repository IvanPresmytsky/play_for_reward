import Button from '~/_common/components/button';
import Menu from '~/_common/components/menu';
import React from 'react';
import { userTypes } from '~/_common/constants';

import {
  navigateToGames,
  navigateToLogin,
  navigateToMainMenu,
} from '~/_common/_helpers/navigationHelper';

const PlayerMenu = () => {
  const { PLAYER } = userTypes;

  const onAvalableGamesClick = () => navigateToGames();
  const onPlayerLoginClick = () => navigateToLogin(PLAYER);
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
