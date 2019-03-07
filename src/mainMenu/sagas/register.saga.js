import { call, put, takeEvery } from 'redux-saga/effects';
import { navigateToRegister } from '~/_common/_helpers/navigationHelper';
import { registerUser } from '~/_common/_helpers/api';
import { statuses } from '~/_common/constants';
import { registerFormActions, registerSucceed, registerFailed } from '../actions/registerFormActions';

export function* registerSaga(action) {
  const { payload, userType } = action;
  const { error, ...user } = yield call(registerUser, payload, userType);

  if (error) {
    yield put(registerFailed(error, userType));
    yield call(() => navigateToRegister(userType, statuses.FAILED, error));
  } else {
    yield put(registerSucceed(user, userType));
    yield call(() => navigateToRegister(userType, statuses.SUCCEED, user.message));
  }
}

export default function* watchRegister() {
  yield takeEvery(registerFormActions.SUBMIT_REGISTER_FORM, registerSaga);
}
