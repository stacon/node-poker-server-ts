import { combineReducers } from 'redux';
import system from './System/system.reducer';

const rootReducer = combineReducers({
  system,
});

export default rootReducer;