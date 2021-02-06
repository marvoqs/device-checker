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
  type: string;
  login: string;
  name: string;
}
