import { call, put, takeEvery } from 'redux-saga/effects';
import { navigateToAuthorization } from '~/_common/_helpers/navigationHelper';
import { authorizeUser } from '~/_common/_helpers/api';
import { statuses } from '~/_common/constants';
import { getAvailableCategories, getAvailableGames } from '~/gameMenu/actions/gameMenuActions';
import { authorizationActions, authorizationSucceed, authorizationFailed } from '../actions/authorizationActions';

export function* authorizationSaga(action) {
  const { payload, userType, method } = action;
  const {
    FAILED,
    PENDING,
    SUCCEED,
  } = statuses;
  yield call(() => navigateToAuthorization(method, userType, PENDING));
  const { error, message, ...user } = yield call(authorizeUser, payload, userType, method);

  if (error) {
    yield put(authorizationFailed(error, userType, method));
    yield call(() => navigateToAuthorization(method, userType, FAILED, error));
  } else {
    yield put(authorizationSucceed(user, userType, method));
    yield put(getAvailableCategories(user.availableCategories));
    yield put(getAvailableGames(user.availableGames));
    yield call(() => navigateToAuthorization(method, userType, SUCCEED, message));
  }
}

export default function* watchRegister() {
  yield takeEvery(authorizationActions.SUBMIT_AUTHORIZATION_FORM, authorizationSaga);
}
