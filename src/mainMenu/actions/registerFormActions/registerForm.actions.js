export const registerFormActions = {
  REGISTER_SUCCEED: 'REGISTER_SUCCEED',
  REGISTER_FAILED: 'REGISTER_FAILED',
  SUBMIT_REGISTER_FORM: 'SUBMIT_REGISTER_FORM',
};

export const submitRegisterForm = (payload, userType) => ({
  type: registerFormActions.SUBMIT_REGISTER_FORM,
  payload,
  userType,
});

export const registerSucceed = (payload, userType) => ({
  type: registerFormActions.REGISTER_SUCCEED,
  payload,
  userType,
});

export const registerFailed = (payload, userType) => ({
  type: registerFormActions.REGISTER_FAILED,
  payload,
  userType,
});
