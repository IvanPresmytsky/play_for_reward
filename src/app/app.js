import ArithmeticGame from '~/games/math/_common/arithmeticGame';
import CategoriesMenu from '~/gameMenu/categoriesMenu';
import GamesMenu from '~/gameMenu/gamesMenu';
import GamePreview from '~/gameMenu/gamePreview';
import GameStatistic from '~/gameMenu/gameStatistic';
import MainHeader from '~/mainHeader';
import MainMenu from '~/mainMenu';
import React, { Component } from 'react';
import routes from '~/_common/constants/routes';

import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router-dom';

import style from './app.css';

export class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <MainHeader />
        <Switch>
          <Route path={`${routes.GAMES}/:category/:game${routes.PREVIEW}`} component={GamePreview} />
          <Route path={`${routes.GAMES}/:category/:game${routes.STATISTIC}`} component={GameStatistic} />
          <Route path={`${routes.GAMES}/:category/:game${routes.GAME}`} component={ArithmeticGame} />
          <Route path={`${routes.GAMES}/:category`} component={GamesMenu} />
          <Route path={routes.GAMES} component={CategoriesMenu} />
          <Route path={routes.MAIN_MENU} component={MainMenu} />
          <Redirect from={routes.BASE} to={routes.MAIN_MENU} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
