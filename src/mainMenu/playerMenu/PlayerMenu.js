import Menu from '~/_common/components/menu';
import List from '~/_common/components/list';
import React from 'react';

import { Button, buttonMods } from '~/_common/components/Button';

import playerMenuItems from './playerMenuItems.constants';

const PlayerMenu = () => (
  <Menu
    title="Player menu"
  >
    <List
      Component={Button}
      items={playerMenuItems}
      modifiers={[buttonMods.RESPONSIVE]}
    />
  </Menu>
);

export default PlayerMenu;
