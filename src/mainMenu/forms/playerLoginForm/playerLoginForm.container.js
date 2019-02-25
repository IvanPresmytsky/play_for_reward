import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PlayerLoginForm from './playerLoginForm';
import { submitPlayerLoginForm } from '../../actions/playerLoginFormActions';


const mapDispatchToProps = dispatch => ({
  submitForm: bindActionCreators(submitPlayerLoginForm, dispatch),
});

export default connect(null, mapDispatchToProps)(PlayerLoginForm);
