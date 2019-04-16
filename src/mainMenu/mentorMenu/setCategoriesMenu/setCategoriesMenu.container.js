import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import SetCategoriesMenu from './SetCategoriesMenu';

const categoriesSelector = state => state.users.availableCategories;

const getCategoriesAndGames = categories =>
  categories.reduce((total, current) => {
    total.push({
      id: current.id,
      isSwitchedOn: current.isSwitchedOn,
    });
    if (current.games && current.games.length) {
      current.games.forEach(item => total.push(item));
    }
    return total;
  }, []);

const categoriesAndGamesSelector = createSelector(
  categoriesSelector,
  getCategoriesAndGames,
);

const mapStateToProps = state => ({
  categories: categoriesSelector(state),
  categoriesAndGames: categoriesAndGamesSelector(state),
});

export default connect(mapStateToProps, null)(SetCategoriesMenu);

