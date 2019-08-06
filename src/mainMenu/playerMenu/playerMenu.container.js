import React from 'react';
import PlayerMenu from './PlayerMenu';
import playerMenuItems from './playerMenuItems.constants';

export default (props) => <PlayerMenu menuItems={playerMenuItems} {...props} />;
