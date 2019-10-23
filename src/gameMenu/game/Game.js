import PropTypes from 'prop-types';
import React from 'react';

import Flex from '~/_common/components/Flex';
import { Button, buttonMods } from '~/_common/components/Button';


export const Game = ({ id, name, clickHandler }) => (
  <Flex>
    <Button
      id={id}
      clickHandler={clickHandler}
      modifiers={[buttonMods.RESPONSIVE_X]}
    >
      {name}
    </Button>
  </Flex>
);

Game.defaultProps = {
  clickHandler: null,
};

Game.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

export default Game;
