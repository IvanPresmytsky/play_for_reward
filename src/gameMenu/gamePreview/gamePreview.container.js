import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import GamePreview from './gamePreview';


const mapStateToProps = state => ({
  games: state.menu.games,
});

export default withRouter(connect(mapStateToProps, null)(GamePreview));
