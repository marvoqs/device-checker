import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Routing Components
import AdminRoute from './components/routing/AdminRoute';
import PrivateRoute from './components/routing/PrivateRoute';

// Layout Components
import TopBar from './components/layout/TopBar';

// Page Components
import AddDevice from './components/devices/AddDevice';
import DevicesList from './components/devices/DevicesList';
import Login from './components/auth/Login';

// Material-UI
import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { authenticate } from './actions/auth';

// Utils
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: theme.spacing(8, 0, 6),
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();

  useEffect(() => {
    store.dispatch(authenticate() as any);
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <TopBar />
        <Container className={classes.content}>
          <Switch>
            <Route exact path='/login' component={Login} />
            <AdminRoute exact path='/add' component={AddDevice} />
            <PrivateRoute exact path='/' component={DevicesList} />
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
