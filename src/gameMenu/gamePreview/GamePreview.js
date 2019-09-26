import Menu from '~/_common/components/Menu';
import PropTypes from 'prop-types';
import React from 'react';

import { Button, buttonMods } from '~/_common/components/Button';
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
          modifiers={[buttonMods.RESPONSIVE_X]}
        >
          Start Game
        </Button>
      </Menu>
    </div>
  );
};

GamePreview.propTypes = {
  games: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

export default GamePreview;
