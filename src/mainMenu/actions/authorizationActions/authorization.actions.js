export const authorizationActions = {
  AUTHORIZATION_SUCCEED: 'AUTHORIZATION_SUCCEED',
  AUTHORIZATION_FAILED: 'AUTHORIZATION_FAILED',
  SUBMIT_AUTHORIZATION_FORM: 'SUBMIT_AUTHORIZATION_FORM',
};

export const submitAuthorizationForm = (payload, userType, method) => ({
  type: authorizationActions.SUBMIT_AUTHORIZATION_FORM,
  method,
  payload,
  userType,
});

export const authorizationSucceed = (payload, userType, method) => ({
  type: authorizationActions.AUTHORIZATION_SUCCEED,
  method,
  payload,
  userType,
});

export const authorizationFailed = (payload, userType, method) => ({
  type: authorizationActions.AUTHORIZATION_FAILED,
  method,
  payload,
  userType,
});
