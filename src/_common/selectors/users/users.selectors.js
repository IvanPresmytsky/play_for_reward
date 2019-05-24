import { createSelector } from 'reselect';
import { userTypes } from '~/_common/constants';
import { currentCategorySelector } from '~/_common/selectors/menu';
import {
  getCategories,
  getCategoriesAndGames,
  getDescriptiveCategories,
  getDescriptiveGames,
} from '~/_common/_helpers/selectors';

export const availableCategoriesSelector = state => (state.users.player ? state.users.player.availableCategories : []);

export const currentPlayerSelector = state => (state.users.mentor ? state.users.mentor.currentPlayer : null);

export const currentUserTypeSelector = state => state.users.currentUserType || userTypes.VISITOR;

export const mentorNameSelector = state => (state.users.mentor ? state.users.mentor.username : null);

export const playersSelector = state => (state.users.mentor ? state.users.mentor.players : []);

export const categoriesSelector = createSelector(
  currentPlayerSelector,
  playersSelector,
  getCategories,
);

export const categoriesAndGamesSelector = createSelector(
  categoriesSelector,
  getCategoriesAndGames,
);

export const categoriesWithDescriptionSelector = createSelector(
  currentUserTypeSelector,
  availableCategoriesSelector,
  getDescriptiveCategories,
);

export const gamesSelector = createSelector(
  currentCategorySelector,
  availableCategoriesSelector,
  currentUserTypeSelector,
  getDescriptiveGames,
);
