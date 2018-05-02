import {
  clearUserInput,
  generateDigits,
  getTotal,
  mathActions } from '../actions/mathActions';
import { put, takeEvery } from 'redux-saga/effects';

export function* resetSession(action) {
  yield put.generateDigits();
  yield put.getTotal();
  yield put.clearUserInput();
}

export default function* watchResetSession() {
  yield takeEvery(mathActions.RESET_SESSION, resetSession);
}