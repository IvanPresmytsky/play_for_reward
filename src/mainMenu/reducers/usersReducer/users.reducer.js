import { handleActions } from 'redux-actions';
import { userTypes } from '~/_common/constants';
import { authorizationActions } from '../../actions/authorizationActions';

export const initialState = {
  currentUserType: userTypes.VISITOR,
  userName: null,
  players: [],
  availableCategories: [
    {
      id: 'math',
      isSwitchedOn: true,
      games: [
        {
          id: 'addition',
          isSwitchedOn: true,
        },
        {
          id: 'substraction',
          isSwitchedOn: false,
        },
      ],
    },
  ],
};

export default handleActions(
  {
    [authorizationActions.AUTHORIZATION_SUCCEED]: (state, action) => ({
      ...state,
      currentUserType: action.payload.userType,
      userName: action.payload.username,
      players: action.payload.players,
      availableCategories: initialState.availableCategories,
    }),
    [authorizationActions.AUTHORIZATION_FAILED]: state => ({
      ...state,
      currentUserType: userTypes.VISITOR,
      userName: null,
      players: null,
      availableCategories: null,
    }),
  },
  initialState,
);

