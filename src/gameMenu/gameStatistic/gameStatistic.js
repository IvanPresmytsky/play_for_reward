import React from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { recordGame } from '../../games/math/actions/mathActions';
import { navigateToGames, navigateToGame } from '../../common/_helpers/navigationHelper';
import Button from '../../common/button/button';
import List from '../common/list/list';
import StatisticItem from './statisicItem';

import style from './gameStatistic.css';

export const GameStatistic = ({ ...props }) => {
  const onPlayBtnClick = (e) => {
    e.preventDefault();
    const category = props.currentCategory.name;
    const game = props.currentGame.name;

    navigateToGame(category, game);
    props.recordGame(category, game);
  };

  const onExitBtnClick = (e) => {
    e.preventDefault();
    navigateToGames();
    props.recordGame(props.currentCategory.name, props.currentGame.name);
  };

  return (
    <div className={style.gameStatistic}>
      <h3 className={style.title}>{`${props.currentGame.name} statistic`}</h3>
      <List
        Component={StatisticItem}
        items={props.gameStatistic}
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
  currentCategory: state.menu.currentCategory,
  currentGame: state.menu.currentGame,
  gameStatistic: state.math.gameStatistic,
});

const mapDispatchToProps = dispatch => ({
  recordGame: bindActionCreators(recordGame, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameStatistic));
