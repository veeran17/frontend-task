import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  // editUserState: editUserReducer
});

export default rootReducer;
