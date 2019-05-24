import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { gamesSelector } from '~/_common/selectors/users';
import GamePreview from './GamePreview';

const mapStateToProps = state => ({
  games: gamesSelector(state),
});

export default withRouter(connect(mapStateToProps, null)(GamePreview));
