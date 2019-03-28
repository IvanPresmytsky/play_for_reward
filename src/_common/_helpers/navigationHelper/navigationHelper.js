import history from '~/store/history';
import { routes, userTypes } from '~/_common/constants';

const {
  GAME,
  GAMES,
  MAIN_MENU,
  PLAYERS,
  PREVIEW,
  STATISTIC,
  SET_GAMES,
} = routes;

const { MENTOR, VISITOR } = userTypes;

export const navigateToCategory = currentCategory => {
  history.push(`${GAMES}/${currentCategory}`);
};

export const navigateToGame = (currentCategory, currentGame) => {
  history.push(`${GAMES}/${currentCategory}/${currentGame}${GAME}`);
};

export const navigateToGames = () => {
  history.push(GAMES);
};

export const navigateToMainMenu = () => {
  history.push(MAIN_MENU);
};

export const navigateToUserMenu = userType => {
  if (userType === VISITOR) {
    return navigateToMainMenu();
  }

  return history.push(routes[`${userType}_MENU`]);
};

export const navigateToPlayers = () => {
  history.push(`${routes[`${MENTOR}_MENU`]}${PLAYERS}`);
};

export const navigateToPlayerConfiguration = (id, section) => {
  history.push(`${routes[`${MENTOR}_MENU`]}${PLAYERS}/${id}${section || ''}`);
};

export const navigateToPlayerGamesConfiguration = id => {
  navigateToPlayerConfiguration(id, SET_GAMES);
};

export const navigateToAuthorization = (method, userType, status, message) => {
  history.push(`/${method}/${userType}/${status || ''}`, { message });
};

export const navigateToGamePreview = (currentCategory, currentGame) => {
  history.push(`${GAMES}/${currentCategory}/${currentGame}${PREVIEW}`);
};

export const navigateToGameStatistic = (currentCategory, currentGame) => {
  history.push(`${GAMES}/${currentCategory}/${currentGame}${STATISTIC}`);
};
