import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';

const Game = ({
  id,
  isSwitchedOn,
  clickHandler,
}) => (
  <div>
    <Card
      checked={isSwitchedOn}
      id={id}
      labelText={id}
      name={id}
      onChange={clickHandler}
    />
  </div>
);

Game.defaultProps = {
  clickHandler: null,
};

Game.propTypes = {
  id: PropTypes.string.isRequired,
  isSwitchedOn: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func,
};

export default Game;

