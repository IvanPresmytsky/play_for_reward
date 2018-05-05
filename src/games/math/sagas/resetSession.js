import { put, takeEvery } from 'redux-saga/effects';
import {
  clearUserInput,
  generateDigits,
  getTotal,
  mathActions,
} from '../actions/mathActions';

export function* resetSession() {
  yield put(generateDigits());
  yield put(getTotal());
  yield put(clearUserInput());
}

export default function* watchResetSession() {
  yield takeEvery(mathActions.RESET_SESSION, resetSession);
}
