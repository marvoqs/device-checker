import { REMOVE_ALERT, SET_ALERT } from '../actions/types';

const initialState: AlertStateType = null;

const alertReducer = (state: AlertStateType = initialState, action: AlertActionType): AlertStateType => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return payload;
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};

export default alertReducer;
