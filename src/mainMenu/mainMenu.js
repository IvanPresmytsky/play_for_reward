import Button from '~/_common/components/button';
import Menu from '~/_common/components/menu';
import React from 'react';
import { userTypes } from '~/_common/constants';

import {
  navigateToGames,
  navigateToLogin,
  navigateToAuthorization,
  navigateToRegister,
} from '~/_common/_helpers/navigationHelper';

const MainMenu = () => {
  const {
    MENTOR,
    PLAYER,
  } = userTypes;

  const onPlayWithoutRegistrationClick = () => navigateToGames();
  const onPlayerLoginClick = () => navigateToLogin(PLAYER);
  const onMentorLoginClick = () => navigateToAuthorization('login', MENTOR);
  const onMentorRegisterClick = () => navigateToRegister(MENTOR);
  const onPlayerRegisterClick = () => navigateToRegister(PLAYER);

  return (
    <Menu
      title="Main menu"
    >
      <Button
        clickHandler={onMentorLoginClick}
        text="Log in as a mentor"
      />
      <Button
        clickHandler={onPlayerLoginClick}
        text="Log in as a player"
      />
      <Button
        clickHandler={onMentorRegisterClick}
        text="Register as a mentor"
      />
      <Button
        clickHandler={onPlayerRegisterClick}
        text="Register as a player"
      />
      <Button
        clickHandler={onPlayWithoutRegistrationClick}
        text="Try without registration"
      />
    </Menu>
  );
};

export default MainMenu;
