import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import CategoriesMenu from './categoriesMenu';

const mapStateToProps = state => ({
  categories: state.menu.categories,
});

export default withRouter(connect(mapStateToProps, null)(CategoriesMenu));
