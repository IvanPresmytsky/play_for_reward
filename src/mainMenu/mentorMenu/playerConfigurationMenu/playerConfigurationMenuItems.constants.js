import {
  navigateToPlayers,
  navigateToPlayerGamesConfiguration,
} from '~/_common/_helpers/navigationHelper';

export default player => [
  {
    id: 'setCategories',
    text: 'Set categories',
    clickHandler: () => navigateToPlayerGamesConfiguration(player),
  },
  {
    id: 'setGames',
    text: 'Set games',
    clickHandler:() => navigateToPlayers(),
  },
  {
    id: 'setReward',
    text: 'Set reward',
    clickHandler: () => navigateToPlayers(),
  },
  {
    id: 'setReward',
    text: 'Set reward',
    clickHandler: () => navigateToPlayers(),
  },
];
