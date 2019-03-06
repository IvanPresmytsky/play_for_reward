import history from '~/store/history';
import { routes } from '~/_common/constants';

export const navigateToCategory = currentCategory => {
  history.push(`${routes.GAMES}/${currentCategory}`);
};

export const navigateToGame = (currentCategory, currentGame) => {
  history.push(`${routes.GAMES}/${currentCategory}/${currentGame}${routes.GAME}`);
};

export const navigateToGames = () => {
  history.push(routes.GAMES);
};

export const navigateToMainMenu = () => {
  history.push(routes.MAIN_MENU);
};

export const navigateToUserMenu = userType => {
  history.push(routes[`${userType}_MENU`]);
};

export const navigateToLogin = (userType, status) => {
  history.push(`${routes.LOGIN}/${userType}/${status || ''}`);
};

export const navigateToRegister = (userType, status) => {
  history.push(`${routes.REGISTER}/${userType}/${status || ''}`);
};

export const navigateToGamePreview = (currentCategory, currentGame) => {
  history.push(`${routes.GAMES}/${currentCategory}/${currentGame}${routes.PREVIEW}`);
};

export const navigateToGameStatistic = (currentCategory, currentGame) => {
  history.push(`${routes.GAMES}/${currentCategory}/${currentGame}${routes.STATISTIC}`);
};
