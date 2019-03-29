import { connect } from 'react-redux';

import SetCategoriesMenu from './SetCategoriesMenu';

const mapStateToProps = state => ({
  categories: state.users.availableCategories,
});

export default connect(mapStateToProps, null)(SetCategoriesMenu);

