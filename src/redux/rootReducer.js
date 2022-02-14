import { combineReducers } from 'redux';
import counter from './counter/reducer';
import todos from './todos/reducer';
import counterToolkit from './counterToolkit/reducer';
import counterToolkitSlice from './counterToolkitSlice/reducer';

export default combineReducers({
  counter,
  todos,
  counterToolkit,
  counterToolkitSlice,
});
