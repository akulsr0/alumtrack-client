import React from 'react';
import { Route } from 'react-router-dom';

import RouterConstants from '../constants/Router';

import Entry from '../containers/Entry';
import Login from '../containers/Auth/Login';
import Register from '../containers/Auth/Register';

export default function AppRoute() {
  return (
    <>
      <Route exact path={RouterConstants.routes.ENTRY} component={Entry} />
      <Route path={RouterConstants.routes.LOGIN} component={Login} />
      <Route path={RouterConstants.routes.REGISTER} component={Register} />
    </>
  );
}
