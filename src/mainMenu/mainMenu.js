import Button from '~/_common/components/button';
import userTypes from '~/_common/constants/userTypes';
import Menu from '~/_common/components/menu';
import React from 'react';

import { navigateToGames, navigateToLogin } from '~/_common/_helpers/navigationHelper';

const MainMenu = () => {
  const onPlayWithoutRegistrationClick = e => {
    e.preventDefault();
    navigateToGames();
  };

  const onPlayerLoginClick = e => {
    e.preventDefault();
    navigateToLogin(userTypes.PLAYER);
  };

  const onMentorLoginClick = e => {
    e.preventDefault();
    navigateToLogin(userTypes.MENTOR);
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
        text="Register as a mentor"
      />
      <Button
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
