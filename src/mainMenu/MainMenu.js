import List from '~/_common/components/List';
import Menu from '~/_common/components/Menu';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, buttonMods } from '~/_common/components/Button';

const MainMenu = ({ menuItems }) => (
  <Menu
    title="Main menu"
  >
    <List
      items={menuItems}
      renderItem={props => (
        <Button modifiers={[buttonMods.RESPONSIVE]} {...props} />
      )}
    />
  </Menu>
);

MainMenu.defaultProps = {
  menuItems: [],
};

MainMenu.propTypes = {
  menuItems: PropTypes.array,
};

export default MainMenu;
