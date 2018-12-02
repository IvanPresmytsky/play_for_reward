import Button from '~/_common/components/button';
import Menu from '~/_common/components/menu';
import React from 'react';

import { navigateToGames } from '~/_common/_helpers/navigationHelper';

const MainMenu = ({}) => {
  const onPlayWithoutRegistrationClick = e => {
    e.preventDefault();
    navigateToGames();
  }

  return (
    <Menu
      title="Main menu"
    >
      <Button
        text="Log in as a mentor"
      />
      <Button
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
