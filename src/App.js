import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { getToken, removeUserSession, setUserSession } from './utils/common';
import axios from 'axios';

 
import Login from './component/login';
import Home from './component/home';
import Dashboard from './component/dashboard';

import PrivateRoute from './utils/privateRoute';
import PublicRoute from './utils/publicRoute';
 
function App() {
  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
          </div>
          <div className="content">
           <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;