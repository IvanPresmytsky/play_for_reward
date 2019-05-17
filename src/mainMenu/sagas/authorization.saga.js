import { call, put, takeEvery } from 'redux-saga/effects';
import { navigateToAuthorization } from '~/_common/_helpers/navigationHelper';
import { authorizeUser } from '~/_common/_helpers/api';
import { statuses } from '~/_common/constants';
import { getAvailableCategories, getAvailableGames } from '~/gameMenu/actions/gameMenuActions';
import { authorizationActions, authorizationSucceed, authorizationFailed } from '../actions/authorizationActions';

export function* authorizationSaga(action) {
  const { payload } = action;
  const { method, userType, data } = payload;
  const {
    FAILED,
    PENDING,
    SUCCEED,
  } = statuses;
  yield call(() => navigateToAuthorization(method, userType, PENDING));

  const { error, message, ...user } = yield call(authorizeUser, data, userType, method);
  const {
    availableCategories,
    availableGames,
    players,
    username,
  } = user;

  if (error) {
    yield put(authorizationFailed());
    yield call(() => navigateToAuthorization(method, userType, FAILED, error));
  } else {
    yield put(authorizationSucceed({
      method,
      players,
      username,
      userType,
    }));
    yield put(getAvailableCategories(availableCategories));
    yield put(getAvailableGames(availableGames));
    yield call(() => navigateToAuthorization(method, userType, SUCCEED, message));
  }
}

export default function* watchRegister() {
  yield takeEvery(authorizationActions.SUBMIT_AUTHORIZATION_FORM, authorizationSaga);
}
