export const mentorLoginFormActions = {
  MENTOR_LOGIN_SUCCEED: 'MENTOR_LOGIN_SUCCEED',
  MENTOR_LOGIN_FAILED: 'MENTOR_LOGIN_FAILED',
  SUBMIT_MENTOR_LOGIN_FORM: 'SUBMIT_MENTOR_LOGIN_FORM',
};

export const submitMentorLoginForm = payload => ({
  type: mentorLoginFormActions.SUBMIT_MENTOR_LOGIN_FORM,
  payload,
});

export const mentorLoginSucceed = payload => ({
  type: mentorLoginFormActions.MENTOR_LOGIN_SUCCEED,
  payload,
});

export const mentorLoginFailed = payload => ({
  type: mentorLoginFormActions.MENTOR_LOGIN_FAILED,
  payload,
});
