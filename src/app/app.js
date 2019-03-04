import ArithmeticGame from '~/games/math/_common/arithmeticGame';
import CategoriesMenu from '~/gameMenu/categoriesMenu';
import GamesMenu from '~/gameMenu/gamesMenu';
import GamePreview from '~/gameMenu/gamePreview';
import GameStatistic from '~/gameMenu/gameStatistic';
import LoginForm from '~/mainMenu/forms/loginForm';
import MainHeader from '~/mainHeader';
import MainMenu from '~/mainMenu';
import LoginMessage from '~/mainMenu/messages/loginMessage';
import RegisterForm from '~/mainMenu/forms/registerForm';
import React from 'react';
import routes from '~/_common/constants/routes';

import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router-dom';

import style from './app.css';

export const App = () => (
  <div className={style.app}>
    <MainHeader />
    <Switch>
      <Route path={`${routes.GAMES}/:category/:game${routes.PREVIEW}`} component={GamePreview} />
      <Route path={`${routes.GAMES}/:category/:game${routes.STATISTIC}`} component={GameStatistic} />
      <Route path={`${routes.GAMES}/:category/:game${routes.GAME}`} component={ArithmeticGame} />
      <Route path={`${routes.GAMES}/:category`} component={GamesMenu} />
      <Route path={routes.GAMES} component={CategoriesMenu} />
      <Route path={`${routes.LOGIN}/:user/:status`} component={LoginMessage} />
      <Route path={`${routes.LOGIN}/:user`} component={LoginForm} />
      <Route path={`${routes.REGISTER}/:user`} component={RegisterForm} />
      <Route path={routes.MAIN_MENU} component={MainMenu} />
      <Redirect from={routes.BASE} to={routes.MAIN_MENU} />
    </Switch>
  </div>
);

export default hot(module)(App);
