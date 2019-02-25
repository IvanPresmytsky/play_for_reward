import { call, put, takeEvery } from 'redux-saga/effects';
import { loginMentor } from '~/_common/_helpers/api';
import { mentorLoginFormActions, mentorLoginSucceed, mentorLoginFailed } from '../actions/mentorLoginFormActions';

export function* loginMentorSaga(action) {
  const { user, error } = yield call(loginMentor, action.payload);

  if (error) {
    yield put(mentorLoginFailed(error));
  } else {
    yield put(mentorLoginSucceed(user));
  }
}

export default function* watchLoginMentor() {
  yield takeEvery(mentorLoginFormActions.SUBMIT_MENTOR_LOGIN_FORM, loginMentorSaga);
}
