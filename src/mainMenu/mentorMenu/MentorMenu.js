import List from '~/_common/components/List';
import Menu from '~/_common/components/menu';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, buttonMods } from '~/_common/components/Button';

const MentorMenu = ({ menuItems }) => (
  <Menu
    title="Mentor menu"
  >
    <List
      items={menuItems}
      renderItem={props => (
        <Button modifiers={[buttonMods.RESPONSIVE]} {...props} />
      )}
    />
  </Menu>
);

MentorMenu.defaultProps = {
  menuItems: [],
};

MentorMenu.propTypes = {
  menuItems: PropTypes.array,
};

export default MentorMenu;
