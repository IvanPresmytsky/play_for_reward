import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Addition from '../games/math/addition/addition';
import GamesMenu from '../gameMenu/gamesMenu/gamesMenu';
import CategoriesMenu from '../gameMenu/categoriesMenu/categoriesMenu';

import style from './app.css';

export class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <h1>Play for reward</h1>
        <Switch>
          <Route path="/games/math/addition" component={Addition} />
          <Route path="/games/math" component={GamesMenu} />
          <Route path="/games" component={CategoriesMenu} />
          <Redirect from="/" to="/games" />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
