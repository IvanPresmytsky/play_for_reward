import { authorizationMethods, userTypes } from '~/_common/constants';

import {
  navigateToAuthorization,
  navigateToMainMenu,
  navigateToPlayers,
} from '~/_common/_helpers/navigationHelper';

const { LOGIN } = authorizationMethods;
const { MENTOR } = userTypes;


export default [
  {
    id: 'accauntSettings',
    text: 'Accaunt settings',
    clickHandler: () => navigateToAuthorization(LOGIN, MENTOR),
  },
  {
    id: 'playerList',
    text: 'Players list',
    clickHandler:() => navigateToPlayers(),
  },
  {
    id: 'signOut',
    text: 'Sign Out',
    clickHandler: () => navigateToMainMenu(),
  },
];
