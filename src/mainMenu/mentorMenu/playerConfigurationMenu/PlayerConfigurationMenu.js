import Button from '~/_common/components/Button';
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
      <Button clickHandler={onSetCategoriesClick}>
        Set categories
      </Button>
      <Button clickHandler={onSetGamesClick}>
        Set games
      </Button>
      <Button clickHandler={onSetRewardClick}>
        Set reward
      </Button>
      <Button clickHandler={onBackClick}>
        Back
      </Button>
    </Menu>
  );
};

PlayerConfigurationMenu.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PlayerConfigurationMenu;
