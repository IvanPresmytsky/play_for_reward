
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { currentUserTypeSelector } from '~/_common/selectors/users';
import { recordGame } from '~/games/math/actions/mathActions';
import { withRouter } from 'react-router';

import GameStatistic from './GameStatistic';

const mapStateToProps = state => ({
  gameStatistic: state.math.gameStatistic,
  currentUser: currentUserTypeSelector(state),
});

const mapDispatchToProps = dispatch => ({
  recordGame: bindActionCreators(recordGame, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameStatistic));
