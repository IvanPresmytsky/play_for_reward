import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Button from '../../common/button/button';
import history from '../../store/history';
import style from './gamePreview.css';

export const GamePreview = ({ ...props }) => {
  const onStartGameBtnClick = (e) => {
    e.preventDefault();
    history.push(`/games/${props.currentCategory.name}/${props.currentGame.name}/game`);
  };

  return (
    <div className={style.gamePreview}>
      <h3 className={style.gameTitle}>{props.currentGame.name}</h3>
      <p className={style.gameDescription}>{props.currentGame.description}</p>
      <Button
        className={style.startGameBtn}
        clickHandler={onStartGameBtnClick}
        text="Start Game"
      />
    </div>
  );
};

const mapStateToProps = state => ({
  currentCategory: state.menu.currentCategory,
  currentGame: state.menu.currentGame,
});

export default withRouter(connect(mapStateToProps, null)(GamePreview));
