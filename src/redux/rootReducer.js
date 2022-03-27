import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counter from './counter/reducer';
import todos from './todos/reducer';
import counterToolkit from './counterToolkit/reducer';
import counterToolkitSlice from './counterToolkitSlice/reducer';

const persistConfig = {
  key: 'todos',
  storage,
};

const todosReducer = persistReducer(persistConfig, todos);

export default combineReducers({
  counter,
  todos: todosReducer,
  // todos,
  counterToolkit,
  counterToolkitSlice,
});
