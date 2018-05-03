import { all } from 'redux-saga/effects';
import watchResetSession from '../games/math/sagas/resetSesion';
import watchFinishSession from '../games/math/sagas/finishSession';

export default function* rootSaga() {
  yield all([
    watchResetSession(),
    watchFinishSession(),
  ]);
}
