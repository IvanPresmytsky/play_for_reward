import ArithmeticGame from '~/games/math/_common/arithmeticGame';
import CategoriesMenu from '~/gameMenu/categoriesMenu';
import GamesMenu from '~/gameMenu/gamesMenu';
import GamePreview from '~/gameMenu/gamePreview';
import GameStatistic from '~/gameMenu/gameStatistic';
import MainHeader from '~/mainHeader';
import MainMenu from '~/mainMenu';
import MentorMenu from '~/mainMenu/mentorMenu';
import SetCategoriesMenu from '~/mainMenu/mentorMenu/setCategoriesMenu';
import PlayerMenu from '~/mainMenu/playerMenu';
import PlayersList from '~/mainMenu/mentorMenu/playersList';
import PlayerConfigurationMenu from '~/mainMenu/mentorMenu/playerConfigurationMenu';
import React from 'react';

import { hot } from 'react-hot-loader';
import { LoginForm, RegisterForm } from '~/mainMenu/forms';
import { AuthorizationMessage } from '~/mainMenu/messages';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from '~/_common/constants';

import style from './App.css';

const {
  BASE,
  CATEGORY_PARAM,
  GAME_PARAM,
  GAME,
  GAMES,
  LOGIN,
  MAIN_MENU,
  MENTOR_MENU,
  METHOD_PARAM,
  PLAYER_MENU,
  PLAYER_PARAM,
  PLAYERS,
  PREVIEW,
  REGISTER,
  SET_GAMES,
  STATISTIC,
  STATUS_PARAM,
  USER_PARAM,
} = routes;

export const App = () => (
  <div className={style.app}>
    <MainHeader />
    <Switch>
      <Route path={`${GAMES}${CATEGORY_PARAM}${GAME_PARAM}${PREVIEW}`} component={GamePreview} />
      <Route path={`${GAMES}${CATEGORY_PARAM}${GAME_PARAM}${STATISTIC}`} component={GameStatistic} />
      <Route path={`${GAMES}${CATEGORY_PARAM}${GAME_PARAM}${GAME}`} component={ArithmeticGame} />
      <Route path={`${GAMES}${CATEGORY_PARAM}`} component={GamesMenu} />
      <Route path={GAMES} component={CategoriesMenu} />
      <Route path={`${MENTOR_MENU}${PLAYERS}${PLAYER_PARAM}${SET_GAMES}`} component={SetCategoriesMenu} />
      <Route path={`${MENTOR_MENU}${PLAYERS}${PLAYER_PARAM}`} component={PlayerConfigurationMenu} />
      <Route path={`${MENTOR_MENU}${PLAYERS}`} component={PlayersList} />
      <Route path={`${METHOD_PARAM}${USER_PARAM}${STATUS_PARAM}`} component={AuthorizationMessage} />
      <Route path={`${LOGIN}${USER_PARAM}`} component={LoginForm} />
      <Route path={`${REGISTER}${USER_PARAM}`} component={RegisterForm} />
      <Route path={MAIN_MENU} component={MainMenu} />
      <Route path={MENTOR_MENU} component={MentorMenu} />
      <Route path={PLAYER_MENU} component={PlayerMenu} />
      <Redirect from={BASE} to={MAIN_MENU} />
    </Switch>
  </div>
);

export default hot(module)(App);
