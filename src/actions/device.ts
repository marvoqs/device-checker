import axios from 'axios';
import { Dispatch } from 'redux';

import { DEVICE_ERROR, GET_DEVICES } from './types';

// Get all devices
export const getDevices = () => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_ROOT_URL}/phones`);
    dispatch({
      type: GET_DEVICES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DEVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
