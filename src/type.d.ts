interface AlertType {
  msg: string;
  type: AlertTypeType;
}

type AlertTypeType = 'error' | 'success' | 'info' | 'warning' | undefined;

type AlertStateType = AlertType | null;

interface AlertActionType {
  type: string;
  payload: AlertType;
}

interface StateType {
  alert: AlertStateType;
  auth: AuthStateType;
  device: DeviceStateType;
  filter: FilterStateType;
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
  os: OsType;
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

type OsType = 'ANDROID' | 'IOS' | 'WINDOWS';

interface DeviceFormData {
  code: string;
  image: string;
  model: string;
  os: OsType | '';
  osVersion: string;
  vendor: string;
}

interface FilterType {
  available: boolean;
  model: string;
  os: '' | OsType;
  vendor: string;
}

type FilterStateType = FilterType;

interface FilterActionType {
  type: string;
  payload: FilterType;
}
