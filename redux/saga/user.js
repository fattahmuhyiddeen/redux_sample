import { put,call, all, fork, takeLatest } from 'redux-saga/effects';
import {Alert} from 'react-native'
import {changeName} from '../action/user'

function* callApiSaga(action) {
    try {
      const response = yield fetch('https://facebook.github.io/react-native/movies.json')
        .then(r => r.json());
        Alert.alert('Hello',action.value)
        yield put(changeName(JSON.stringify(response)))

    } catch (e) {
      alert(JSON.stringify(e))
    }
}

function* userWatcher() {
  yield takeLatest('CALL_API', callApiSaga);
}

export default function* func() {
  yield all([fork(userWatcher)]);
}
