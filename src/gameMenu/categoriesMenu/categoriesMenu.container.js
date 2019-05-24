import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { categoriesWithDescriptionSelector } from '~/_common/selectors/users';

import { getCurrentCategory } from '../actions/gameMenuActions';
import CategoriesMenu from './CategoriesMenu';

const mapStateToProps = state => ({
  categories: categoriesWithDescriptionSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getCurrentCategory: bindActionCreators(getCurrentCategory, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoriesMenu));
