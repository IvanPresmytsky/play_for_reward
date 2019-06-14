import PropTypes from 'prop-types';
import React from 'react';
import Button from '~/_common/components/Button';

import style from './Game.css';

export const Game = ({ data, clickHandler }) => (
  <div className={style.game}>
    <Button
      id={data.id}
      clickHandler={clickHandler}
    >
      {data.name}
    </Button>
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
