import { all, fork } from 'redux-saga/effects';
import authSagas from './authSagas';
import orgSagas from './orgSagas';

export default function* rootSaga() {
    yield all([fork(authSagas), fork(orgSagas)]);
}
