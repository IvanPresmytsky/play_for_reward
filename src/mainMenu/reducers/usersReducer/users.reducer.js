import { handleActions } from 'redux-actions';
import { userTypes } from '~/_common/constants';
import { authorizationActions } from '../../actions/authorizationActions';
import { mentorActions } from '../../actions/mentorActions';

export const initialState = {
  currentUserType: userTypes.VISITOR,
  mentor: null,
  player: null,
  username: null,
};

export default handleActions(
  {
    [authorizationActions.MENTOR_AUTHORIZATION_SUCCEED]: (state, action) => ({
      ...state,
      currentUserType: action.payload.userType,
      mentor: {
        ...state.mentor,
        currentPlayer: null,
        username: action.payload.username,
        players: action.payload.players,
      },
      player: null,
    }),
    [authorizationActions.PLAYER_AUTHORIZATION_SUCCEED]: (state, action) => ({
      ...state,
      currentUserType: action.payload.userType,
      player: {
        ...state.player,
        availableCategories: action.payload.availableCategories,
        username: action.payload.username,
      },
      mentor: null,
    }),
    [mentorActions.SET_CURRENT_PLAYER]: (state, action) => ({
      ...state,
      mentor: {
        ...state.mentor,
        currentPlayer: action.payload,
      },
    }),
    [authorizationActions.AUTHORIZATION_FAILED]: state => ({
      ...state,
      currentUserType: userTypes.VISITOR,
      player: null,
      mentor: null,
    }),
  },
  initialState,
);

