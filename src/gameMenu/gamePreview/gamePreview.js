import Button from '~/_common/components/button';
import Menu from '~/_common/components/menu';
import React from 'react';

import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { navigateToGame } from '~/_common/_helpers/navigationHelper';
import { getItemById } from '../_common/_helpers/mappingHelper';
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
      <Menu
        title={game}
        subTitle={gameDescription}
      >
        <Button
          clickHandler={onStartGameBtnClick}
          text="Start Game"
        />
      </Menu>
    </div>
  );
};

const mapStateToProps = state => ({
  games: state.menu.games,
});

export default withRouter(connect(mapStateToProps, null)(GamePreview));
