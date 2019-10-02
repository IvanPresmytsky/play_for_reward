import React, { Suspense, lazy } from 'react';

import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Spinner from '~/_common/components/Spinner';
import MainHeader from '~/mainHeader';
import { routes } from '~/_common/constants';

import GlobalStyles from './GlobalStyles';
import * as S from './StyledApp';

const ArithmeticGame = lazy(() => import(/* webpackChunkName: "ArithmeticGame" */'~/games/math/_common/arithmeticGame'));
const AuthorizationMessage = lazy(() => import(/* webpackChunkName: "AuthorizationMessage" */'~/mainMenu/messages/authorizationMessage'));
const CategoriesMenu = lazy(() => import(/* webpackChunkName: "CategoriesMenu" */'~/gameMenu/categoriesMenu'));
const GamesMenu = lazy(() => import(/* webpackChunkName: "GamesMenu" */'~/gameMenu/gamesMenu'));
const GamePreview = lazy(() => import(/* webpackChunkName: "GamePreview" */'~/gameMenu/gamePreview'));
const GameStatistic = lazy(() => import(/* webpackChunkName: "GameStatistic" */'~/gameMenu/gameStatistic'));
const LoginForm = lazy(() => import(/* webpackChunkName: "LoginForm" */'~/mainMenu/forms/loginForm'));
const MainMenu = lazy(() => import(/* webpackChunkName: "MainMenu" */'~/mainMenu'));
const MentorMenu = lazy(() => import(/* webpackChunkName: "MentorMenu" */'~/mainMenu/mentorMenu'));
const RegisterForm = lazy(() => import(/* webpackChunkName: "RegisterForm" */'~/mainMenu/forms/registerForm'));
const SetCategoriesMenu = lazy(() => import(/* webpackChunkName: "SetCategoriesMenu" */'~/mainMenu/mentorMenu/setCategoriesMenu'));
const PlayerMenu = lazy(() => import(/* webpackChunkName: "PlayerMenu" */'~/mainMenu/playerMenu'));
const PlayersList = lazy(() => import(/* webpackChunkName: "PlayersList" */'~/mainMenu/mentorMenu/playersList'));
const PlayerConfigurationMenu = lazy(() => import(/* webpackChunkName: "PlayerConfigurationMenu" */'~/mainMenu/mentorMenu/playerConfigurationMenu'));

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

const themes = {
  light: {
    background: '#fff',
    mainHeaderBackground: 'red',
  },
};

export const App = ({ theme }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={themes[theme]}>
      <S.StyledApp>
        <MainHeader />
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
      </S.StyledApp>
    </ThemeProvider>
  </>
);

App.defaultProps = {
  theme: 'light',
}

App.propTypes = {
  theme: PropTypes.string,
};

export default App;