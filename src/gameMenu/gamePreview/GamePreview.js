import Button from '~/_common/components/button';
import Menu from '~/_common/components/menu';
import PropTypes from 'prop-types';
import React from 'react';

import { navigateToGame } from '~/_common/_helpers/navigationHelper';
import { getItemById } from '../_common/_helpers/mappingHelper';
import style from './GamePreview.css';

export const GamePreview = ({ games, match }) => {
  const {
    category,
    game,
  } = match.params;

  const gameDescription = getItemById(games, game).description;

  const onStartGameBtnClick = () => navigateToGame(category, game);

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

GamePreview.propTypes = {
  games: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

export default GamePreview;
