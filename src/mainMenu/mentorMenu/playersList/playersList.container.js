import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { playersSelector } from '~/_common/selectors/users';
import { setCurrentPlayer } from '../../actions/mentorActions';
import PlayersList from './PlayersList';

const mapStateToProps = state => ({
  players: playersSelector(state),
});

const mapDispatchToProps = dispatch => ({
  setCurrentPlayer: bindActionCreators(setCurrentPlayer, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList);

