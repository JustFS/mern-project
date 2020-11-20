import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import usersReducer from './users.reducer';

export default combineReducers({
  userReducer,
  usersReducer
});