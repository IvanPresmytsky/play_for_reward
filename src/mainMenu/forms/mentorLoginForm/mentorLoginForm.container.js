import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MentorLoginForm from './mentorLoginForm';
import { submitMentorLoginForm } from '../../actions/mentorLoginFormActions';


const mapDispatchToProps = dispatch => ({
  submitForm: bindActionCreators(submitMentorLoginForm, dispatch),
});

export default connect(null, mapDispatchToProps)(MentorLoginForm);
