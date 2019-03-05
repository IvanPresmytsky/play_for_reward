import { userTypes } from '~/_common/constants';
import { loginFormActions, registerFormActions } from '../actions/loginFormActions';

export const initialState = {
  currentUserType: userTypes.VISITOR,
  userName: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginFormActions.LOGIN_SUCCEED:
    case registerFormActions.REGISTER_SUCCEED:
      return {
        ...state,
        currentUserType: action.userType,
        username: action.payload.username,
      };
    case loginFormActions.LOGIN_FAILED:
    case registerFormActions.REGISTER_FAILED:
      return {
        ...state,
        currentUserType: userTypes.VISITOR,
        username: null,
      };
    default:
      return state;
  }
};
