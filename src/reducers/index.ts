import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import device from './device';

export default combineReducers({
  alert,
  auth,
  device,
});
