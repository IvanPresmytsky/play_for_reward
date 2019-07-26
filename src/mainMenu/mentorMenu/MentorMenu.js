import Menu from '~/_common/components/menu';
import List from '~/_common/components/list';
import React from 'react';
import { Button, buttonMods } from '~/_common/components/Button';

import mentorMenuItems from './mentorMenuItems.constants';

const MentorMenu = () => (
  <Menu
    title="Mentor menu"
  >
    <List
      Component={Button}
      items={mentorMenuItems}
      modifiers={[buttonMods.RESPONSIVE]}
    />
  </Menu>
);

export default MentorMenu;
