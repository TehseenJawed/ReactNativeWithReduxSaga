import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import rootSaga from './sagas/sagas';
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export default configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga);
