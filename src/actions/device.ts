import axios from 'axios';
import { Dispatch } from 'redux';
import { setAlert } from './alert';

import { ADD_DEVICE, DEVICE_ERROR, GET_DEVICES, UPDATE_DEVICE } from './types';

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

// Add device
export const addDevice = (formData: DeviceFormData) => async (dispatch: Dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = formData;

  try {
    const res = await axios.post(`${process.env.REACT_APP_API_ROOT_URL}/phones`, body, config);
    dispatch({
      type: ADD_DEVICE,
      payload: res.data,
    });
    dispatch(setAlert(`Zařízení ${res.data.model} bylo přidáno.`, 'success') as any);
  } catch (err) {
    dispatch({
      type: DEVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    dispatch(setAlert('Zařízení se nepodařilo přidat. Zkus to prosím později.', 'error') as any);
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
    dispatch(setAlert(`Zařízení ${res.data.model} bylo označeno jako zapůjčené.`, 'success') as any);
  } catch (err) {
    dispatch({
      type: DEVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    dispatch(setAlert('Zařízení se nepodařilo zapůjčit. Zkus to prosím později.', 'error') as any);
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
    dispatch(setAlert(`Zařízení ${res.data.model} bylo označeno jako vrácené.`, 'success') as any);
  } catch (err) {
    dispatch({
      type: DEVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    dispatch(setAlert('Zařízení se nepodařilo vrátit. Zkus to prosím později.', 'error') as any);
  }
};
