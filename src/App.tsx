import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import DevicesList from './components/DevicesList';
import Login from './components/Login';
import TopBar from './components/TopBar';

// Material-UI
import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: theme.spacing(8, 0, 6),
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Router>
      <TopBar />
      <Container className={classes.content}>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={DevicesList} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
