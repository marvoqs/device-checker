import { REMOVE_ALERT, SET_ALERT } from '../actions/types';

const initialState: AlertStateType = [];

const alertReducer = (state: AlertStateType = initialState, action: AlertActionType): AlertStateType => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload as AlertType];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};

export default alertReducer;
