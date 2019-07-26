import {
  navigateToAuthorization,
  navigateToGames,
  navigateToMainMenu,
} from '~/_common/_helpers/navigationHelper';
import { authorizationMethods, userTypes } from '~/_common/constants';

const {
  LOGIN,
} = authorizationMethods;
const {
  PLAYER,
} = userTypes;

export default [
  {
    id: 'accauntSettings',
    text: 'Accaunt settings',
    clickHandler: () => navigateToAuthorization(LOGIN, PLAYER),
  },
  {
    id: 'availableGames',
    text: 'Available games',
    clickHandler: () => () => navigateToGames(),
  },
  {
    id: 'Sign out',
    text: 'Sign out',
    clickHandler: () => navigateToMainMenu(),
  },
];
