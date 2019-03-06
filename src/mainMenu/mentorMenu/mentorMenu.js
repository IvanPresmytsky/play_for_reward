import Button from '~/_common/components/button';
import Menu from '~/_common/components/menu';
import React from 'react';
import { userTypes } from '~/_common/constants';

import {
  navigateToMainMenu,
  navigateToLogin,
} from '~/_common/_helpers/navigationHelper';

const MentorMenu = () => {
  const { MENTOR } = userTypes;

  const onSettingsClick = () => navigateToLogin(MENTOR);
  const onPlayersClick = () => navigateToMainMenu();
  const onSignOutClick = () => navigateToMainMenu();

  return (
    <Menu
      title="Mentor menu"
    >
      <Button
        clickHandler={onSettingsClick}
        text="Accaunt settings"
      />
      <Button
        clickHandler={onPlayersClick}
        text="Players list"
      />
      <Button
        clickHandler={onSignOutClick}
        text="Sign out"
      />
    </Menu>
  );
};

export default MentorMenu;
