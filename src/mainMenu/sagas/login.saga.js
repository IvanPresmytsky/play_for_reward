import statuses from '~/_common/constants/statuses.constants';
import { call, put, takeEvery } from 'redux-saga/effects';
import { loginUser } from '~/_common/_helpers/api';
import { navigateToLogin } from '~/_common/_helpers/navigationHelper';
import { loginFormActions, loginSucceed, loginFailed } from '../actions/loginFormActions';

export function* loginSaga(action) {
  const { payload, userType } = action;
  const { user, error } = yield call(loginUser, payload, userType);

  if (error) {
    yield put(loginFailed(error, userType));
    yield call(() => navigateToLogin(userType, statuses.FAILED));
  } else {
    yield put(loginSucceed(user, userType));
    yield call(() => navigateToLogin(userType, statuses.SUCCEED));
  }
}

export default function* watchLogin() {
  yield takeEvery(loginFormActions.SUBMIT_LOGIN_FORM, loginSaga);
}
