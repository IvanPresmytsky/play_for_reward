import { call, put, takeEvery } from 'redux-saga/effects';
import { navigateToAuthorization } from '~/_common/_helpers/navigationHelper';
import { authorizeMentor, authorizePlayer } from '~/_common/_helpers/api';
import { statuses, userTypes } from '~/_common/constants';
import { getAvailableCategories, getAvailableGames } from '~/gameMenu/actions/gameMenuActions';
import {
  authorizationActions,
  authorizationFailed,
  mentorAuthorizationSucceed,
  playerAuthorizationSucceed,
} from '../actions/authorizationActions';

const {
  MENTOR,
  PLAYER,
} = userTypes;
const {
  FAILED,
  PENDING,
  SUCCEED,
} = statuses;

export function* mentorAuthorizationSaga(action) {
  const { payload } = action;
  const { method, data } = payload;
  const { error, message, ...user } = yield call(authorizeMentor, data, MENTOR, method);
  const {
    players,
    username,
  } = user;

  if (error) {
    yield put(authorizationFailed());
    yield call(() => navigateToAuthorization(method, MENTOR, FAILED, error));
  } else {
    yield put(mentorAuthorizationSucceed({
      method,
      players,
      username,
      userType: MENTOR,
    }));
  }

  yield call(() => navigateToAuthorization(method, MENTOR, SUCCEED, message));
}

export function* playerAuthorizationSaga(action) {
  const { payload } = action;
  const { method, data } = payload;
  const { error, message, ...user } = yield call(authorizePlayer, data, PLAYER, method);
  const {
    availableCategories,
    availableGames,
    username,
  } = user;

  if (error) {
    yield put(authorizationFailed());
    yield call(() => navigateToAuthorization(method, PLAYER, FAILED, error));
  } else {
    yield put(playerAuthorizationSucceed({
      method,
      availableCategories,
      username,
      userType: PLAYER,
    }));
  }
  yield put(getAvailableCategories(availableCategories));
  yield put(getAvailableGames(availableGames));
  yield call(() => navigateToAuthorization(method, PLAYER, SUCCEED, message));
}

export function* authorizationSaga(action) {
  const { userType, method } = action.payload;

  yield call(() => navigateToAuthorization(method, userType, PENDING));

  if (userType === userTypes.MENTOR) {
    yield mentorAuthorizationSaga(action);
  } else {
    yield playerAuthorizationSaga(action);
  }
}

export default function* watchRegister() {
  yield takeEvery(authorizationActions.SUBMIT_AUTHORIZATION_FORM, authorizationSaga);
}
