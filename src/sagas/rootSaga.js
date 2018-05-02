import { all } from 'redux-saga';
import { watchResetSession } from '../games/math/sagas/resetSesion';

export default function* rootSaga() {
  yield all([
    watchResetSession(),
  ])
}
