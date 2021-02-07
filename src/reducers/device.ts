import { ADD_DEVICE, DEVICE_ERROR, GET_DEVICES, UPDATE_DEVICE } from '../actions/types';

const initialState = {
  devices: [],
  loading: true,
  error: null,
};

const deviceReducer = (state: DeviceStateType = initialState, action: DeviceActionType): DeviceStateType => {
  const { type, payload } = action;
  switch (type) {
    case GET_DEVICES:
      return {
        ...state,
        devices: payload,
        loading: false,
      };
    case DEVICE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case ADD_DEVICE:
      return {
        ...state,
        devices: [...state.devices, payload],
        loading: false,
      };
    case UPDATE_DEVICE:
      return {
        ...state,
        devices: state.devices.map((device) => (device.id === payload.id ? payload : device)),
        loading: false,
      };
    default:
      return state;
  }
};

export default deviceReducer;
