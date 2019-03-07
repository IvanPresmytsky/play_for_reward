import { call, put, takeEvery } from 'redux-saga/effects';
import { loginUser } from '~/_common/_helpers/api';
import { navigateToLogin, navigateToAuthorization } from '~/_common/_helpers/navigationHelper';
import { statuses } from '~/_common/constants';
import { loginFormActions, loginSucceed, loginFailed } from '../actions/loginFormActions';

export function* loginSaga(action) {
  const { payload, userType } = action;

  const { error, message, ...user } = yield call(loginUser, payload, userType);

  if (error) {
    yield put(loginFailed(error, userType));
    yield call(() => navigateToLogin(userType, statuses.FAILED, error));
  } else {
    yield put(loginSucceed(user, userType));
    // yield call(() => navigateToLogin(userType, statuses.SUCCEED, message));
    yield call(() => navigateToAuthorization('login', userType, statuses.SUCCEED, message));
  }
}

export default function* watchLogin() {
  yield takeEvery(loginFormActions.SUBMIT_LOGIN_FORM, loginSaga);
}
