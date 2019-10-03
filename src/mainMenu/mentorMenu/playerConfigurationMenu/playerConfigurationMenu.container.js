import React from 'react';
import { withRouter } from 'react-router';
import PlayerConfigurationMenu from './PlayerConfigurationMenu';
import playerConfigurationMenuItem from './playerConfigurationMenuItems.constants';

const PlayerConfigurationMenuContainer = props => (
  <PlayerConfigurationMenu getMenuItems={playerConfigurationMenuItem} {...props} />
);

export default withRouter(PlayerConfigurationMenuContainer);
