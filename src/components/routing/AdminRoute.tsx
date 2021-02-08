import React, { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute: FC<RouteProps> = (props) => {
  const { loading, user } = useSelector((state: StateType) => state.auth);

  if (user?.type !== 'admin' && !loading) {
    return <Redirect to='/' />;
  }

  return <Route {...props} />;
};

export default AdminRoute;
