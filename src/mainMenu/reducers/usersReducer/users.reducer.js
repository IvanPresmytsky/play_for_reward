import { userTypes } from '~/_common/constants';
import { authorizationActions } from '../../actions/authorizationActions';

export const initialState = {
  currentUserType: userTypes.VISITOR,
  userName: null,
  players: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case authorizationActions.AUTHORIZATION_SUCCEED:
      return {
        ...state,
        currentUserType: action.userType,
        userName: action.payload.username,
        players: action.payload.players,
      };
    case authorizationActions.AUTHORIZATION_FAILED:
      return {
        ...state,
        currentUserType: userTypes.VISITOR,
        userName: null,
      };
    default:
      return state;
  }
};
