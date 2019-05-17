import { createActions } from 'redux-actions';

export const authorizationActions = {
  AUTHORIZATION_SUCCEED: 'AUTHORIZATION_SUCCEED',
  AUTHORIZATION_FAILED: 'AUTHORIZATION_FAILED',
  SUBMIT_AUTHORIZATION_FORM: 'SUBMIT_AUTHORIZATION_FORM',
};

export const {
  authorizationFailed,
  authorizationSucceed,
  submitAuthorizationForm,
} = createActions(...Object.values(authorizationActions));
