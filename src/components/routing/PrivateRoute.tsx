import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute: FC<RouteProps> = (props) => {
  const { isAuthenticated, loading } = useSelector((state: StateType) => state.auth);

  if (!isAuthenticated && !loading) {
    return <Redirect to='/login' />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
