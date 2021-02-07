interface AlertType {
  id: number;
  msg: string;
  type: string;
}

type AlertStateType = AlertType[];

interface AlertActionType {
  type: string;
  payload: AlertType | number;
}

interface StateType {
  alert: AlertStateType;
  auth: AuthStateType;
  device: DeviceStateType;
}

interface AuthStateType {
  isAuthenticated: boolean;
  loading: boolean;
  token: string | null;
  user: UserType | null;
}

interface AuthActionType {
  type: string;
  payload?: any;
}

interface UserType {
  id: number;
  type: 'user' | 'admin';
  login: string;
  name: string;
}

interface ErrorType {
  msg: string;
  status: number;
}

interface DeviceType {
  id: string;
  code: string;
  os: 'ANDROID' | 'IOS' | 'WINDOWS';
  vendor: string;
  model: string;
  osVersion: string;
  image: string;
  borrowed?: {
    user: UserType;
    date: number;
  };
}

interface DeviceStateType {
  devices: DeviceType[];
  loading: boolean;
  error: ErrorType | null;
}

interface DeviceActionType {
  type: string;
  payload?: any;
}
