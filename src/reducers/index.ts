import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import device from './device';
import filter from './filter';

export default combineReducers({
  alert,
  auth,
  device,
  filter,
});
