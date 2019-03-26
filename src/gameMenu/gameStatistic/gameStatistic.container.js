
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { recordGame } from '~/games/math/actions/mathActions';
import { withRouter } from 'react-router';

import GameStatistic from './GameStatistic';

const mapStateToProps = state => ({
  gameStatistic: state.math.gameStatistic,
  currentUser: state.users.currentUserType,
});

const mapDispatchToProps = dispatch => ({
  recordGame: bindActionCreators(recordGame, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameStatistic));
