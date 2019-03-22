import { all } from 'redux-saga/effects';
import { watchFinishSession, watchResetSession } from '~/games/math/sagas';
import { watchAuthorization } from '~/mainMenu/sagas';

export default function* rootSaga() {
  yield all([
    watchResetSession(),
    watchFinishSession(),
    watchAuthorization(),
  ]);
}
