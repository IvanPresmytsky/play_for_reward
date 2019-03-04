import { all } from 'redux-saga/effects';
import { watchFinishSession, watchResetSession } from '~/games/math/sagas';
import { watchLogin } from '~/mainMenu/sagas';

export default function* rootSaga() {
  yield all([
    watchResetSession(),
    watchFinishSession(),
    watchLogin(),
  ]);
}
