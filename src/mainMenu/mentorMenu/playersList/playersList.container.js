import { connect } from 'react-redux';
import PlayersList from './PlayersList';

const mapStateToProps = state => ({
  players: state.users.players,
});

export default connect(mapStateToProps, null)(PlayersList);

