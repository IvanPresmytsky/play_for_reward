import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { mentorNameSelector } from '~/_common/selectors/users';
import RegisterForm from './RegisterForm';
import { submitAuthorizationForm } from '../../actions/authorizationActions';


const mapStateToProps = state => ({
  mentorName: mentorNameSelector(state),
});

const mapDispatchToProps = dispatch => ({
  submitForm: bindActionCreators(submitAuthorizationForm, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));
