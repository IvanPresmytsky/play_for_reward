import { connect } from 'react-redux';
import GameDisplay from './GameDisplay';

const mapStateToProps = state => ({
  firstDigit: state.math.firstDigit,
  secondDigit: state.math.secondDigit,
});

export default connect(mapStateToProps, null)(GameDisplay);
