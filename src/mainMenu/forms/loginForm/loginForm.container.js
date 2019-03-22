import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import LoginForm from './LoginForm';
import { submitAuthorizationForm } from '../../actions/authorizationActions';

const mapDispatchToProps = dispatch => ({
  submitForm: bindActionCreators(submitAuthorizationForm, dispatch),
});

export default withRouter(connect(null, mapDispatchToProps)(LoginForm));
