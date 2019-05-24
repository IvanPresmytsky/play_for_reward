import { mapCategoriesToDescriptive } from '~/_common/_helpers/selectors';
import { userTypes, categories } from '~/_common/constants';

const getDescriptiveCategories = (
  currentUserType,
  availableCategories,
) => ((currentUserType === userTypes.PLAYER && availableCategories)
  ? mapCategoriesToDescriptive(categories, availableCategories)
  : categories);

export default getDescriptiveCategories;
