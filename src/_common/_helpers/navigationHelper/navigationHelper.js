import history from '~/store/history';
import routes from '~/_common/constants/routes';

export const navigateToCategory = currentCategory => {
  history.push(`${routes.GAMES}/${currentCategory}`);
};

export const navigateToGame = (currentCategory, currentGame) => {
  history.push(`${routes.GAMES}/${currentCategory}/${currentGame}${routes.GAME}`);
};

export const navigateToGames = () => {
  history.push(`${routes.GAMES}`);
};

export const navigateToMainMenu = () => {
  history.push(`${routes.MAIN_MENU}`);
};

export const navigateToLogin = userType => {
  history.push(`${routes[`${userType}_LOGIN`]}`);
};

export const navigateToRegister = userType => {
  history.push(`${routes[`${userType}_REGISTER`]}`);
};

export const navigateToGamePreview = (currentCategory, currentGame) => {
  history.push(`${routes.GAMES}/${currentCategory}/${currentGame}${routes.PREVIEW}`);
};

export const navigateToGameStatistic = (currentCategory, currentGame) => {
  history.push(`${routes.GAMES}/${currentCategory}/${currentGame}${routes.STATISTIC}`);
};
