import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import LoginForm from './loginForm';
import { submitLoginForm } from '../../actions/loginFormActions';

const mapDispatchToProps = dispatch => ({
  submitForm: bindActionCreators(submitLoginForm, dispatch),
});

export default withRouter(connect(null, mapDispatchToProps)(LoginForm));
