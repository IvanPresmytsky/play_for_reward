export const playerLoginFormActions = {
  PLAYER_LOGIN_SUCCEED: 'PLAYER_LOGIN_SUCCEED',
  PLAYER_LOGIN_FAILED: 'PLAYER_LOGIN_FAILED',
  SUBMIT_PLAYER_LOGIN_FORM: 'SUBMIT_PLAYER_LOGIN_FORM',
};

export const submitPlayerLoginForm = payload => ({
  type: playerLoginFormActions.SUBMIT_PLAYER_LOGIN_FORM,
  payload,
});

export const playerLoginSucceed = payload => ({
  type: playerLoginFormActions.PLAYER_LOGIN_SUCCEED,
  payload,
});

export const playerLoginFailed = payload => ({
  type: playerLoginFormActions.PLAYER_LOGIN_FAILED,
  payload,
});
