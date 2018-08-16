import { put,call, all, fork, takeLatest } from 'redux-saga/effects';
import {changeName} from '../action/user'


function* callApi(action) {
  // alert(action.value)

    try {

      const response = yield fetch('https://facebook.github.io/react-native/movies.json')
        .then(r => r.json());


        const stringRes = JSON.stringify(response)
        yield put(changeName(stringRes))

    } catch (e) {
      // alert(JSON.stringify(e))
      console.log(e)
        // yield put(fetchFailed(e));
        return;
    }

    // yield put(setRecords(responseBody.records));

}

function* userWatcher() {
  yield takeLatest('CALL_API', callApi);
}

export default function* func() {
  yield all([fork(userWatcher)]);
}
