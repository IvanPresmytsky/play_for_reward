import Menu from '~/_common/components/menu';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, buttonMods } from '~/_common/components/Button';

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
        modifiers={[buttonMods.RESPONSIVE]}
      >
        Set categories
      </Button>
      <Button
        clickHandler={onSetGamesClick}
        modifiers={[buttonMods.RESPONSIVE]}
      >
        Set games
      </Button>
      <Button
        clickHandler={onSetRewardClick}
        modifiers={[buttonMods.RESPONSIVE]}
      >
        Set reward
      </Button>
      <Button
        clickHandler={onBackClick}
        modifiers={[buttonMods.RESPONSIVE]}
      >
        Back
      </Button>
    </Menu>
  );
};

PlayerConfigurationMenu.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PlayerConfigurationMenu;
