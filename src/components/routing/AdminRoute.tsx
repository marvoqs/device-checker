import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const user = useSelector((state: StateType) => state.auth.user);

  return <Route {...rest} render={(props) => (user?.type === 'admin' ? <Component {...props} /> : <Redirect to='/' />)} />;
};

export default PrivateRoute;
