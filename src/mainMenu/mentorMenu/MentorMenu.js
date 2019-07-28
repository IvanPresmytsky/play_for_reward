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
      items={mentorMenuItems}
      renderItem={props => (
        <Button modifiers={[buttonMods.RESPONSIVE]} {...props} />
      )}
    />
  </Menu>
);

export default MentorMenu;
