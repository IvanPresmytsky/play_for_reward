import Menu from '~/_common/components/menu';
import List from '~/_common/components/list';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, buttonMods } from '~/_common/components/Button';

const PlayerConfigurationMenu = ({ match, getMenuItems }) => {
  const { player } = match.params;

  return (
    <Menu
      title="Player configuration menu"
    >
      <List
        items={getMenuItems(player)}
        renderItem={props => (
          <Button modifiers={[buttonMods.RESPONSIVE]} {...props} />
        )}
      />
    </Menu>
  );
};

PlayerConfigurationMenu.propTypes = {
  match: PropTypes.object.isRequired,
  getMenuItems: PropTypes.func.isRequired,
};

export default PlayerConfigurationMenu;
