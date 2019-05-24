import { mapCategoriesToDescriptive } from '~/_common/_helpers/selectors';
import { userTypes, categories } from '~/_common/constants';

const getDescriptiveGames = (currentCategory, availableCategories, currentUserType) => {
  const { games } = categories.find(item => item.id === currentCategory);
  const playerGames = availableCategories.find(item => item.id === currentCategory).games;

  return (currentUserType === userTypes.PLAYER && playerGames)
    ? mapCategoriesToDescriptive(games, playerGames)
    : games;
};

export default getDescriptiveGames;
