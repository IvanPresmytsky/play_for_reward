export const mentorLogingFormActions = {
  MENTOR_LOGIN_SUCCEED: 'MENTOR_LOGIN_SUCCEED',
  MENTOR_LOGIN_FAILED: 'MENTOR_LOGIN_FAILED',
};

export const mentorLoginSucceed = payload => ({
  type: mentorLogingFormActions.MENTOR_LOGIN_SUCCEED,
  payload,
});

export const mentorLoginFailed = payload => ({
  type: mentorLogingFormActions.MENTOR_LOGIN_FAILED,
  payload,
});
