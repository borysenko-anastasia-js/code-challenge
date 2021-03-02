import React from 'react';
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import MianRoute, { SigninRoute } from './Route';
import routes from './routes';

import SignIn from './Containers/SignIn';
import Home from './Containers/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const {isLoggedin} = useSelector(state => state.user);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/" to={routes.home} />
          <SigninRoute
            path={routes.signIn}
            loggedIn={isLoggedin}
            exact
            component={SignIn}
          />
          <MianRoute
            path={routes.home}
            loggedIn={isLoggedin}
            component={Home}
          />
          <Redirect from={routes.all} to={routes.home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
