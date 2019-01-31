import userTypes from '~/_common/constants/userTypes';
import { mentorLoginFormActions } from '../actions/mentorLoginFormActions';

export const initialState = {
  currentUserType: userTypes.VISITOR,
  userName: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case mentorLoginFormActions.MENTOR_LOGIN_SUCCEED:
      return {
        ...state,
        currentUserType: userTypes.MENTOR,
        username: action.payload.username,
      };
    case mentorLoginFormActions.MENTOR_LOGIN_FAILED:
      return {
        ...state,
        currentUserType: userTypes.VISITOR,
        username: null,
      };
    default:
      return state;
  }
};
