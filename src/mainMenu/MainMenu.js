import Button from '~/_common/components/Button';
import Menu from '~/_common/components/menu';
import React from 'react';
import { authorizationMethods, userTypes } from '~/_common/constants';

import {
  navigateToGames,
  navigateToAuthorization,
} from '~/_common/_helpers/navigationHelper';

const MainMenu = () => {
  const {
    LOGIN,
    REGISTER,
  } = authorizationMethods;
  const {
    MENTOR,
    PLAYER,
  } = userTypes;

  const onPlayWithoutRegistrationClick = () => navigateToGames();
  const onPlayerLoginClick = () => navigateToAuthorization(LOGIN, PLAYER);
  const onMentorLoginClick = () => navigateToAuthorization(LOGIN, MENTOR);
  const onMentorRegisterClick = () => navigateToAuthorization(REGISTER, MENTOR);

  return (
    <Menu
      title="Main menu"
    >
      <Button clickHandler={onMentorLoginClick}>
        Log in as a mentor
      </Button>
      <Button clickHandler={onPlayerLoginClick}>
        Log in as a player
      </Button>
      <Button clickHandler={onMentorRegisterClick}>
        Register as a mentor
      </Button>
      <Button clickHandler={onPlayWithoutRegistrationClick}>
        Try without registration
      </Button>
    </Menu>
  );
};

export default MainMenu;
