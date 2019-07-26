import Menu from '~/_common/components/menu';
import List from '~/_common/components/list';
import React from 'react';
import { Button, buttonMods } from '~/_common/components/Button';

import mainMenuItems from './mainMenuItems.constants';

const MainMenu = () => (
  <Menu
    title="Main menu"
  >
    <List
      Component={Button}
      items={mainMenuItems}
      modifiers={[buttonMods.RESPONSIVE]}
    />
  </Menu>
);

export default MainMenu;
