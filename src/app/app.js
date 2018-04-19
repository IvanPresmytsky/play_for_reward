import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Addition from '../games/math/addition/addition';
import GamesMenu from '../gameMenu/gamesMenu/gamesMenu';
import GamePreview from '../gameMenu/gamePreview/gamePreview';
import GameStatistic from '../gameMenu/gameStatistic/gameStatistic';
import CategoriesMenu from '../gameMenu/categoriesMenu/categoriesMenu';

import style from './app.css';

export class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <h1>Play for reward</h1>
        <Switch>
          <Route path="/games/:category/:game/preview" component={GamePreview} />
          <Route path="/games/:category/:game/statistic" component={GameStatistic} />
          <Route path="/games/math/addition/game" component={Addition} />
          <Route path="/games/:category" component={GamesMenu} />
          <Route path="/games" component={CategoriesMenu} />
          <Redirect from="/" to="/games" />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
