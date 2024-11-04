import { combineReducers } from 'redux';
import userReducer from './features/userSlice';
import linkedInReducer from './features/linkedInSlice';

const rootReducer = combineReducers({
  user: userReducer,
  linkedIn: linkedInReducer,
});

export default rootReducer;