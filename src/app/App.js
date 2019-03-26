import ArithmeticGame from '~/games/math/_common/arithmeticGame';
import CategoriesMenu from '~/gameMenu/categoriesMenu';
import GamesMenu from '~/gameMenu/gamesMenu';
import GamePreview from '~/gameMenu/gamePreview';
import GameStatistic from '~/gameMenu/gameStatistic';
import MainHeader from '~/mainHeader';
import MainMenu from '~/mainMenu';
import MentorMenu from '~/mainMenu/mentorMenu';
import PlayerMenu from '~/mainMenu/playerMenu';
import PlayersList from '~/mainMenu/mentorMenu/playersList';
import React from 'react';

import { hot } from 'react-hot-loader';
import { LoginForm, RegisterForm } from '~/mainMenu/forms';
import { AuthorizationMessage } from '~/mainMenu/messages';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from '~/_common/constants';

import style from './App.css';

export const App = () => (
  <div className={style.app}>
    <MainHeader />
    <Switch>
      <Route path={`${routes.GAMES}/:category/:game${routes.PREVIEW}`} component={GamePreview} />
      <Route path={`${routes.GAMES}/:category/:game${routes.STATISTIC}`} component={GameStatistic} />
      <Route path={`${routes.GAMES}/:category/:game${routes.GAME}`} component={ArithmeticGame} />
      <Route path={`${routes.GAMES}/:category`} component={GamesMenu} />
      <Route path={routes.GAMES} component={CategoriesMenu} />
      <Route path="/:method/:user/:status" component={AuthorizationMessage} />
      <Route path={`${routes.LOGIN}/:user`} component={LoginForm} />
      <Route path={`${routes.REGISTER}/:user`} component={RegisterForm} />
      <Route path={routes.MAIN_MENU} component={MainMenu} />
      <Route path={`${routes.MENTOR_MENU}/players`} component={PlayersList} />
      <Route path={routes.MENTOR_MENU} component={MentorMenu} />
      <Route path={routes.PLAYER_MENU} component={PlayerMenu} />
      <Redirect from={routes.BASE} to={routes.MAIN_MENU} />
    </Switch>
  </div>
);

export default hot(module)(App);
