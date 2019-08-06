import { Button, buttonMods } from '~/_common/components/Button';
import List from '~/_common/components/list';
import PropTypes from 'prop-types';
import React from 'react';

import { navigateToGame, navigateToUserMenu } from '~/_common/_helpers/navigationHelper';

import StatisticItem from './gameStatisticItem';
import style from './GameStatistic.css';

export const GameStatistic = ({
  currentUser,
  gameStatistic,
  match,
  recordGame,
}) => {
  const {
    category,
    game,
  } = match.params;
  const payload = {
    category,
    game,
  };

  const onPlayBtnClick = () => {
    navigateToGame(category, game);
    recordGame(payload);
  };

  const onExitBtnClick = () => {
    navigateToUserMenu(currentUser);
    recordGame(payload);
  };

  return (
    <div className={style.gameStatistic}>
      <h3 className={style.title}>{`${game} statistic`}</h3>
      <List
        items={gameStatistic}
        renderItem={props => (
          <StatisticItem {...props} />
        )}
      >
        <Button
          clickHandler={onPlayBtnClick}
          id="playAgain"
          modifiers={[buttonMods.RESPONSIVE]}
        >
          Play again
        </Button>
        <Button
          className={style.exitBtn}
          clickHandler={onExitBtnClick}
          id="exit"
          modifiers={[buttonMods.RESPONSIVE]}
        >
          Exit to user menu
        </Button>
      </List>
    </div>
  );
};

GameStatistic.propTypes = {
  currentUser: PropTypes.string.isRequired,
  gameStatistic: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  recordGame: PropTypes.func.isRequired,
};

export default GameStatistic;
