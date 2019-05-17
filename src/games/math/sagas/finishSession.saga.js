import { put, takeEvery } from 'redux-saga/effects';
import {
  checkLevel,
  checkSolution,
  handleScore,
  mathActions,
  recordSession,
  resetSession,
} from '../actions/mathActions';

export function* finishSession(action) {
  yield put(checkSolution(action.payload));
  yield put(handleScore());
  yield put(checkLevel());
  yield put(recordSession());
  yield put(resetSession());
}

export default function* watchFinishSession() {
  yield takeEvery(mathActions.FINISH_SESSION, finishSession);
}
