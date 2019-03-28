import Button from '~/_common/components/button';
import Menu from '~/_common/components/menu';
import PropTypes from 'prop-types';
import React from 'react';

import { navigateToPlayers, navigateToPlayerGamesConfiguration } from '~/_common/_helpers/navigationHelper';

const PlayerConfigurationMenu = ({ match }) => {
  const { player } = match.params;

  const onSetCategoriesClick = () => navigateToPlayerGamesConfiguration(player);
  const onSetGamesClick = () => navigateToPlayers();
  const onSetRewardClick = () => navigateToPlayers();
  const onBackClick = () => navigateToPlayers();

  return (
    <Menu
      title="Player configuration menu"
    >
      <Button
        clickHandler={onSetCategoriesClick}
        text="Set categories"
      />
      <Button
        clickHandler={onSetGamesClick}
        text="Set games"
      />
      <Button
        clickHandler={onSetRewardClick}
        text="Set reward"
      />
      <Button
        clickHandler={onBackClick}
        text="Back"
      />
    </Menu>
  );
};

PlayerConfigurationMenu.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PlayerConfigurationMenu;
