import { all } from 'redux-saga/effects';
import { watchFinishSession, watchResetSession } from '~/games/math/sagas';
import { watchLoginMentor, watchLoginPlayer } from '~/mainMenu/sagas';

export default function* rootSaga() {
  yield all([
    watchResetSession(),
    watchFinishSession(),
    watchLoginMentor(),
    watchLoginPlayer(),
  ]);
}
