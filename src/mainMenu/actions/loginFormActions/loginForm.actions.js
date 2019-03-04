export const loginFormActions = {
  LOGIN_SUCCEED: 'LOGIN_SUCCEED',
  LOGIN_FAILED: 'LOGIN_FAILED',
  SUBMIT_LOGIN_FORM: 'SUBMIT_LOGIN_FORM',
};

export const submitLoginForm = (payload, userType) => ({
  type: loginFormActions.SUBMIT_LOGIN_FORM,
  payload,
  userType,
});

export const loginSucceed = (payload, userType) => ({
  type: loginFormActions.LOGIN_SUCCEED,
  payload,
  userType,
});

export const loginFailed = (payload, userType) => ({
  type: loginFormActions.LOGIN_FAILED,
  payload,
  userType,
});
