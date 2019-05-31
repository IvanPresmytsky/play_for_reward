import { mapCategoriesToDescriptive } from '~/_common/_helpers/selectors';
import { userTypes, categories } from '~/_common/constants';

const getDescriptiveGames = (currentCategory, availableCategories, currentUserType) => {
  const { games } = categories.find(item => item.id === currentCategory);
  const availableCategory = availableCategories.find(item => item.id === currentCategory);

  return (currentUserType === userTypes.PLAYER && availableCategory)
    ? mapCategoriesToDescriptive(games, availableCategory.games)
    : games;
};

export default getDescriptiveGames;
