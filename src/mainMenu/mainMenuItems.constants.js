import {
  navigateToGames,
  navigateToAuthorization,
} from '~/_common/_helpers/navigationHelper';
import { authorizationMethods, userTypes } from '~/_common/constants';

const {
  LOGIN,
  REGISTER,
} = authorizationMethods;
const {
  MENTOR,
  PLAYER,
} = userTypes;

export default [
  {
    id: 'mentorLogin',
    text: 'Log in as a mentor',
    clickHandler: () => navigateToAuthorization(LOGIN, MENTOR),
  },
  {
    id: 'playerLogin',
    text: 'Log in as a player',
    clickHandler: () => navigateToAuthorization(LOGIN, PLAYER),
  },
  {
    id: 'mentorRegister',
    text: 'Register as a mentor',
    clickHandler: () => navigateToAuthorization(REGISTER, MENTOR),
  },
  {
    id: 'tryWithoutRegistration',
    text: 'Try without registration',
    clickHandler: () => navigateToGames(),
  },
];
