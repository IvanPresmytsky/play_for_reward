import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router';

import App from './App';

const mapStateToProps = state => ({
  theme: state.theme.currentTheme,
});

export default withRouter(connect(mapStateToProps, null)(hot(module)(App)));