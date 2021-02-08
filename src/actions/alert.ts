import { Dispatch } from 'redux';

import { REMOVE_ALERT, SET_ALERT } from './types';

export const setAlert = (msg: string, type: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: { msg, type },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
};
