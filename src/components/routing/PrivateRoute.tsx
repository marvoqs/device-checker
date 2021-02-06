import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const { isAuthenticated, loading } = useSelector((state: StateType) => state.auth);

  return <Route {...rest} render={(props) => (!isAuthenticated && !loading ? <Redirect to='/login' /> : <Component {...props} />)} />;
};

export default PrivateRoute;
