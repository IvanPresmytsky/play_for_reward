import Button from '~/_common/components/button';
import userTypes from '~/_common/constants/userTypes';
import Menu from '~/_common/components/menu';
import React from 'react';

import {
  navigateToGames,
  navigateToLogin,
  navigateToRegister
} from '~/_common/_helpers/navigationHelper';

const MainMenu = () => {
  const {
    MENTOR,
    PLAYER,
  } = userTypes;

  const onPlayWithoutRegistrationClick = e => {
    e.preventDefault();
    navigateToGames();
  };

  const onPlayerLoginClick = e => {
    e.preventDefault();
    navigateToLogin(PLAYER);
  };

  const onMentorLoginClick = e => {
    e.preventDefault();
    navigateToLogin(MENTOR);
  };

  const onMentorRegisterClick = e => {
    e.preventDefault();
    navigateToRegister(MENTOR);
  };

  const onPlayerRegisterClick = e => {
    e.preventDefault();
    navigateToRegister(PLAYER);
  };

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
