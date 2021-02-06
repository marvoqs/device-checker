import axios from 'axios';
import { Dispatch } from 'redux';
import { setAlert } from './alert';

import { AUTH_ERROR, AUTH_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from './types';

// Authenticate User
export const authenticate = () => (dispatch: Dispatch) => {
  if (localStorage.token && localStorage.user) {
    dispatch({ type: AUTH_SUCCESS });
  } else {
    dispatch({ type: AUTH_ERROR });
  }
};

// Login User
export const login = (login: string, password: string) => async (dispatch: Dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ login, password });

  try {
    const res = await axios.post(`${process.env.REACT_APP_API_ROOT_URL}/login`, body, config);

    const payload = {
      token: res.data.token,
      user: {
        id: res.data.id,
        type: res.data.type,
        login: res.data.login,
        name: res.data.name,
      },
    };

    dispatch({
      type: LOGIN_SUCCESS,
      payload,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error: any) => dispatch(setAlert(error.msg, 'danger') as any));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout User
export const logout = () => (dispatch: Dispatch) => {
  dispatch({ type: LOGOUT });
};
