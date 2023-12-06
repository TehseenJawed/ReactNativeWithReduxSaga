import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import authReducer from './reducers/authReducer';
import rootSaga from './sagas/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export default configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga);
