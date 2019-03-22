import Button from '~/_common/components/button';
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
  const onPlayerRegisterClick = () => navigateToAuthorization(REGISTER, PLAYER);

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
