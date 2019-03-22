import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import RegisterForm from './registerForm';
import { submitAuthorizationForm } from '../../actions/authorizationActions';

const mapDispatchToProps = dispatch => ({
  submitForm: bindActionCreators(submitAuthorizationForm, dispatch),
});

export default withRouter(connect(null, mapDispatchToProps)(RegisterForm));
