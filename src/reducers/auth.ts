import { AUTH_ERROR, AUTH_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../actions/types';

const initialState: AuthStateType = {
  isAuthenticated: false,
  loading: true,
  token: localStorage.getItem('token') || null,
  user: JSON.parse(localStorage.getItem('user') as string) || null,
};

const authReducer = (state: AuthStateType = initialState, action: AuthActionType): AuthStateType => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(payload.user));
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: payload.token,
        user: payload.user,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
