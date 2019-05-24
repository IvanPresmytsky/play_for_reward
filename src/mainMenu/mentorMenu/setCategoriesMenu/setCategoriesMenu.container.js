import { connect } from 'react-redux';
import { categoriesSelector, categoriesAndGamesSelector } from '~/_common/selectors/users';

import SetCategoriesMenu from './SetCategoriesMenu';

const mapStateToProps = state => ({
  categories: categoriesSelector(state),
  categoriesAndGames: categoriesAndGamesSelector(state),
});

export default connect(mapStateToProps, null)(SetCategoriesMenu);

