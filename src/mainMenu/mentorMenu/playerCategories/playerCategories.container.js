import { connect } from 'react-redux';

import PlayerCategories from './PlayerCategories';

const mapStateToProps = state => ({
  categories: state.menu.categories,
});

export default connect(mapStateToProps, null)(PlayerCategories);

