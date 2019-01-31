export const formActions = {
  SUBMIT_LOGIN_FORM: 'SUBMIT_LOGIN_FORM',
};

export const submitLoginForm = payload => ({
  type: formActions.SUBMIT_LOGIN_FORM,
  payload,
});
