import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import history from '../../store/history';
import Button from '../../common/button/button';
import List from '../common/list/list';
import StatisticItem from './statisicItem';

import style from './gameStatistic.css';

export const GameStatistic = ({ ...props }) => {
  const onPlayBtnClick = (e) => {
    e.preventDefault();
    history.push(`/games/${props.currentCategory.name}/${props.currentGame.name}/game`);
  };

  const onExitBtnClick = (e) => {
    e.preventDefault();
    history.push('/games');
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

export default withRouter(connect(mapStateToProps, null)(GameStatistic));
