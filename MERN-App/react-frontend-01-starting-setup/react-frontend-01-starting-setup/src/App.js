import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from "./places/pages/Places";

const App = () => {
  return <Router>
    <Switch>   {/* This works as a break; when it hits a route it stops after that therefor it will not redirect */}
      <Route path="/" exact>
        <Users />
      </Route>  
      <Route path="/places/new" exact>
        <NewPlace />
      </Route>  
      <Redirect to="/" />
    </Switch>
  </Router>
}

export default App;
