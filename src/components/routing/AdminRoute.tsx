import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const { loading, user } = useSelector((state: StateType) => state.auth);

  console.log(user);

  return <Route {...rest} render={(props) => (user?.type !== 'admin' && !loading ? <Redirect to='/' /> : <Component {...props} />)} />;
};

export default AdminRoute;
