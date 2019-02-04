import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import GamesMenu from './gamesMenu';


const mapStateToProps = state => ({
  games: state.menu.games,
});

export default withRouter(connect(mapStateToProps, null)(GamesMenu));
