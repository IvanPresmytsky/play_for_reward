import List from '~/_common/components/List';
import Menu from '~/_common/components/Menu';
import PropTypes from 'prop-types';
import React from 'react';

import { Button, buttonMods } from '~/_common/components/Button';

const PlayerMenu = ({ menuItems }) => (
  <Menu
    title="Player menu"
  >
    <List
      items={menuItems}
      renderItem={props => (
        <Button modifiers={[buttonMods.RESPONSIVE_X]} {...props} />
      )}
    />
  </Menu>
);

PlayerMenu.defaultProps = {
  menuItems: [],
}

PlayerMenu.propTypes = {
  menuItems: PropTypes.array,
}

export default PlayerMenu;
