import { all } from 'redux-saga/effects';
import { watchFinishSession, watchResetSession } from '~/games/math/sagas';

export default function* rootSaga() {
  yield all([
    watchResetSession(),
    watchFinishSession(),
  ]);
}
