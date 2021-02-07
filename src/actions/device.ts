import axios from 'axios';
import { Dispatch } from 'redux';

import { DEVICE_ERROR, GET_DEVICES, UPDATE_DEVICE } from './types';

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

// Borrow device by ID
export const borrowDevice = (id: string) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_ROOT_URL}/phones/${id}/borrow`);
    dispatch({
      type: UPDATE_DEVICE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DEVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Return device by ID
export const returnDevice = (id: string) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_ROOT_URL}/phones/${id}/return`);
    dispatch({
      type: UPDATE_DEVICE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DEVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
