import React from 'react';

import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router';

import App from './App';
import themes from './themes';

const AppContainer = props => (
  <App themes={themes} {...props} />
);

const mapStateToProps = state => ({
  theme: state.theme.currentTheme,
});

export default withRouter(connect(mapStateToProps, null)(hot(module)(AppContainer)));