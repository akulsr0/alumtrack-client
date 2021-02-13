import React from 'react';
import { Route } from 'react-router-dom';

import RouterConstants from '../constants/Router';

import Entry from '../containers/Entry';
import Login from '../containers/Auth/Login';
import Register from '../containers/Auth/Register';
import Home from '../containers/Home';

export default function AppRoute() {
  return (
    <>
      <Route exact path={RouterConstants.routes.ENTRY} component={Entry} />
      <Route exact path={RouterConstants.routes.LOGIN} component={Login} />
      <Route
        exact
        path={RouterConstants.routes.REGISTER}
        component={Register}
      />
      <Route path={RouterConstants.routes.DASHBOARD} component={Home} />
    </>
  );
}
