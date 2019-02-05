import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MentorLoginForm from './mentorLoginForm';
import { submitLoginForm } from '../../actions/formActions';


const mapDispatchToProps = dispatch => ({
  submitLoginForm: bindActionCreators(submitLoginForm, dispatch),
});

export default connect(null, mapDispatchToProps)(MentorLoginForm);
