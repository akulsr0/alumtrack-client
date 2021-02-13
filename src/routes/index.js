import React from 'react';
import { Route } from 'react-router-dom';

import RouterConstants from '../constants/Router';

import Entry from '../containers/Entry';

export default function AppRoute() {
  return (
    <>
      <Route exact path={RouterConstants.routes.ENTRY} component={Entry} />
    </>
  );
}
