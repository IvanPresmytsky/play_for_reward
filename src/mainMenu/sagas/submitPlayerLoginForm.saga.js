import { call, put, takeEvery } from 'redux-saga/effects';
import { loginPlayer } from '~/_common/_helpers/api';
import { playerLoginFormActions, playerLoginSucceed, playerLoginFailed } from '../actions/playerLoginFormActions';

export function* loginPlayerSaga(action) {
  const { user, error } = yield call(loginPlayer, action.payload);

  if (error) {
    yield put(playerLoginFailed(error));
  } else {
    yield put(playerLoginSucceed(user));
  }
}

export default function* watchLoginPlayer() {
  yield takeEvery(playerLoginFormActions.SUBMIT_PLAYER_LOGIN_FORM, loginPlayerSaga);
}
