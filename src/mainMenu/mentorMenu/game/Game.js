import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';

const Game = ({ data, clickHandler }) => (
  <div>
    <Card
      checked={data.isSwitchedOn}
      id={data.id}
      labelText={data.id}
      name={data.id}
      onChange={clickHandler}
    />
  </div>
);

Game.defaultProps = {
  clickHandler: null,
};

Game.propTypes = {
  data: PropTypes.object.isRequired,
  clickHandler: PropTypes.func,
};

export default Game;

