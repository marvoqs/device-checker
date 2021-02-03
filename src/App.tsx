import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import DevicesList from './components/DevicesList';
import Login from './components/Login';
import TopBar from './components/TopBar';

const App: React.FC = () => {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={DevicesList} />
      </Switch>
    </Router>
  );
};

export default App;
