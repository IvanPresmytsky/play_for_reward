import React from 'react';

import PropTypes from 'prop-types';

import Flex from '~/_common/components/Flex';
import List from '~/_common/components/List';
import { Title, titleTypes } from '~/_common/components/Title';
import { Button, buttonMods } from '~/_common/components/Button';
import { navigateToGame, navigateToUserMenu } from '~/_common/_helpers/navigationHelper';

import StatisticItem from './components/GameStatisticItem';
import GameStatisticHeader from './components/GameStatisticHeader';

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
    <Flex direction="column" paddingLeft="10px" paddingRight="10px">
      <Title text={`${game} statistic`} type={titleTypes.h3} />
      <GameStatisticHeader />
      <List
        items={gameStatistic}
        renderItem={props => (
          <StatisticItem {...props} />
        )}
      >
        <Button
          clickHandler={onPlayBtnClick}
          id="playAgain"
          modifiers={[buttonMods.RESPONSIVE_X]}
        >
          Play again
        </Button>
        <Button
          clickHandler={onExitBtnClick}
          id="exit"
          modifiers={[buttonMods.RESPONSIVE_X, buttonMods.CANCEL]}
        >
          Exit to user menu
        </Button>
      </List>
    </Flex>
  );
};

GameStatistic.propTypes = {
  currentUser: PropTypes.string.isRequired,
  gameStatistic: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  recordGame: PropTypes.func.isRequired,
};

export default GameStatistic;
