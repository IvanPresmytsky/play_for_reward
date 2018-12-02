import React from 'react';
import Button from '~/_common/button';
import { navigateToGames } from '~/_common/_helpers/navigationHelper';

import styles from './mainMenu.css';

const MainMenu = ({}) => {
  const onPlayWithoutRegistrationClick = e => {
    e.preventDefault();
    navigateToGames();
  }

  return (
    <div className={styles.mainMenu}>
      <h2>Main menu</h2>
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
    </div>
  );
};

export default MainMenu;
