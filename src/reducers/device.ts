import { DEVICE_ERROR, GET_DEVICES } from '../actions/types';

const initialState = {
  devices: [],
  loading: true,
  error: null,
};

const deviceReducer = (state: DeviceStateType = initialState, action: DeviceActionType) => {
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
        profile: null,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default deviceReducer;
