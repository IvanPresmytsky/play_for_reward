import Button from '~/_common/components/button';
import List from '~/_common/components/list';
import PropTypes from 'prop-types';
import React from 'react';

import { navigateToGame, navigateToMainMenu } from '~/_common/_helpers/navigationHelper';

import StatisticItem from './gameStatisticItem';
import style from './gameStatistic.css';

export const GameStatistic = ({ gameStatistic, match, recordGame }) => {
  const {
    category,
    game,
  } = match.params;

  const onPlayBtnClick = () => {
    navigateToGame(category, game);
    recordGame(category, game);
  };

  const onExitBtnClick = () => {
    navigateToMainMenu();
    recordGame(category, game);
  };

  return (
    <div className={style.gameStatistic}>
      <h3 className={style.title}>{`${game} statistic`}</h3>
      <List
        Component={StatisticItem}
        items={gameStatistic}
      />
      <Button
        className={style.playBtn}
        clickHandler={onPlayBtnClick}
        text="Play again"
      />
      <Button
        className={style.exitBtn}
        clickHandler={onExitBtnClick}
        text="Exit to main menu"
      />
    </div>
  );
};

GameStatistic.propTypes = {
  gameStatistic: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  recordGame: PropTypes.func.isRequired,
};

export default GameStatistic;
