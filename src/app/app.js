import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Addition from '../games/math/addition/addition';
import GamesMenu from '../gameMenu/gamesMenu/gamesMenu';
import GamePreview from '../gameMenu/gamePreview/gamePreview';
import GameStatistic from '../gameMenu/gameStatistic/gameStatistic';
import CategoriesMenu from '../gameMenu/categoriesMenu/categoriesMenu';
import routes from '../common/constants/routes';

import style from './app.css';

export class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <h1>Play for reward</h1>
        <Switch>
          <Route path={`${routes.GAMES}/:category/:game${routes.PREVIEW}`} component={GamePreview} />
          <Route path={`${routes.GAMES}/:category/:game${routes.STATISTIC}`} component={GameStatistic} />
          <Route path={`${routes.GAMES}${routes.MATH}${routes.ADDITION}${routes.GAME}`} component={Addition} />
          <Route path={`${routes.GAMES}/:category`} component={GamesMenu} />
          <Route path={routes.GAMES} component={CategoriesMenu} />
          <Redirect from={routes.BASE} to={routes.GAMES} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
