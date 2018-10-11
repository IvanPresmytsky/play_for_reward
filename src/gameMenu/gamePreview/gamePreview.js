import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Button from '~/_common/button/button';
import { navigateToGame } from '~/_common/_helpers/navigationHelper';
import { getItemById } from '../common/_helpers/mappingHelper';
import style from './gamePreview.css';

export const GamePreview = ({ games, match }) => {
  const {
    category,
    game,
  } = match.params;

  const gameDescription = getItemById(games, game).description;

  const onStartGameBtnClick = e => {
    e.preventDefault();
    navigateToGame(category, game);
  };

  return (
    <div className={style.gamePreview}>
      <h3 className={style.gameTitle}>{game}</h3>
      <p className={style.gameDescription}>{gameDescription}</p>
      <Button
        className={style.startGameBtn}
        clickHandler={onStartGameBtnClick}
        text="Start Game"
      />
    </div>
  );
};

const mapStateToProps = state => ({
  games: state.menu.games,
});

export default withRouter(connect(mapStateToProps, null)(GamePreview));
