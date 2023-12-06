import {call, put, takeEvery, all} from 'redux-saga/effects';
import axios from 'axios';

// login FUNCTION
const LoginFunction = async data => {
  const response = await axios.post(
    'http://restapi.adequateshop.com/api/authaccount/login',
    data,
  );
  return response?.data;
};

// login WORKER
function* loginWorker({action}) {
  try {
    yield put({type: 'LOADING', payload: true});
    const user = yield call(() => LoginFunction(action));
    yield put({type: 'LOADING', payload: false});
    yield put({type: 'SET_USERDATA', user: user});
  } catch (e) {
    console.log('ERROR....',e);
    yield put({type: 'LOADING', payload: false});
  }
}
// login WATCHER
function* mySaga() {
  yield takeEvery('USER_FETCH_REQUESTED', loginWorker);
}

export default function* rootSaga() {
  yield all([mySaga()]);
}
