// import { createStore } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import reducer from './rootReducer';

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [
        persistStore,
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      ],
    },
  }),
});

export const persistor = persistStore(store);
