import React from 'react';
import { Route as Router, Redirect } from "react-router-dom";
import Routes from './routes';

export function SigninRoute({ component: Comp, loggedIn, path, ...rest }) {
  return (
    <Router
      path={path}
      {...rest}
      render={props => {
        return loggedIn ? (
          <Redirect to={{ pathname: Routes.main }} />
        ) : (
          <Comp {...props} />
        );
      }}
    />
  );
};

export default function MianRoute({ component: Comp, loggedIn, path, userInfo, ...rest }) {
  return (
    <Router
      path={path}
      {...rest}
      render={props => {
        return loggedIn ? (
          <Comp {...props} />
        ) : (
          <Redirect to={{ pathname: Routes.signIn }} />
        );
      }}
    />
  );
};