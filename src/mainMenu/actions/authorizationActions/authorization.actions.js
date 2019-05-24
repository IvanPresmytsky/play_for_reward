import { createActions } from 'redux-actions';

export const authorizationActions = {
  AUTHORIZATION_FAILED: 'AUTHORIZATION_FAILED',
  MENTOR_AUTHORIZATION_SUCCEED: 'MENTOR_AUTHORIZATION_SUCCEED',
  PLAYER_AUTHORIZATION_SUCCEED: 'PLAYER_AUTHORIZATION_SUCCEED',
  SUBMIT_AUTHORIZATION_FORM: 'SUBMIT_AUTHORIZATION_FORM',
};

export const {
  authorizationFailed,
  mentorAuthorizationSucceed,
  playerAuthorizationSucceed,
  submitAuthorizationForm,
} = createActions(...Object.values(authorizationActions));
