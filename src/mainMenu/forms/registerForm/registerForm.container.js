import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import RegisterForm from './registerForm';
import { submitRegisterForm } from '../../actions/registerFormActions';

const mapDispatchToProps = dispatch => ({
  submitForm: bindActionCreators(submitRegisterForm, dispatch),
});

export default withRouter(connect(null, mapDispatchToProps)(RegisterForm));
