import { Dispatch } from 'redux';
import { v4 as uuid } from 'uuid';

import { REMOVE_ALERT, SET_ALERT } from './types';

export const setAlert = (msg: string, type: string, timeout: number = 5000) => (dispatch: Dispatch) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { id, msg, type },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
