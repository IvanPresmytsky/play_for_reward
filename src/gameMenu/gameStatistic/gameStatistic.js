import Button from '~/_common/components/button';
import List from '~/_common/components/list';
import React from 'react';

import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { navigateToGame, navigateToMainMenu } from '~/_common/_helpers/navigationHelper';

import { recordGame } from '../../games/math/actions/mathActions';
import StatisticItem from './gameStatisticItem';
import style from './gameStatistic.css';

export const GameStatistic = ({ gameStatistic, match, ...props }) => {
  const {
    category,
    game,
  } = match.params;

  const onPlayBtnClick = e => {
    e.preventDefault();
    navigateToGame(category, game);
    props.recordGame(category, game);
  };

  const onExitBtnClick = e => {
    e.preventDefault();
    navigateToMainMenu();
    props.recordGame(category, game);
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

const mapStateToProps = state => ({
  gameStatistic: state.math.gameStatistic,
});

const mapDispatchToProps = dispatch => ({
  recordGame: bindActionCreators(recordGame, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameStatistic));
