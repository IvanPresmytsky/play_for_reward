import React from 'react';
import PropTypes from 'prop-types';
import Button from '~/_common/components/button';
import style from './Player.css';

export const Player = ({ data, clickHandler }) => (
  <div className={style.player}>
    <Button
      className={style.playerBtn}
      id={data.id}
      clickHandler={clickHandler}
      text={data.name}
    />
  </div>
);

Player.defaultProps = {
  clickHandler: null,
};

Player.propTypes = {
  data: PropTypes.object.isRequired,
  clickHandler: PropTypes.func,
};

export default Player;

